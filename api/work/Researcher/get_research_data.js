const db = require("../../../config/database");

const getResearchData = (req, res, next) => {
    const typeID = req.query.typeID

    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {//TODO edit query แก้แล้วแต่ไม่รู้ถูกป่าว
            connection.query(`SELECT researchID, researchName, typeName, researchDetail, date FROM research INNER JOIN animaltype on research.typeID = animaltype.typeID WHERE typename = '${typeID}'`, function (error, result) {
                connection.release()
                if (error) {
                    res.status(500).json({"status": "Error", "message": `${error.message}`})
                } else {
                    res.status(200).json({resultCode: "200", status: "SUCCESS", "errorMessage": null, data: result})
                }
            })
        }
    })
}

module.exports = {getResearchData}