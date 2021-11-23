const db = require("../../../config/database");

const getMedicalHistory = (req, res, next) => {
    const animalID = req.query.animalID

    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {//TODO edit query หรือมันไม่ต้อง INNER JOIN วะ แต่คิดว่าไม่ต้องนะ
            connection.query(`SELECT medicalID, medicalName, date, time FROM medical INNER JOIN animal ON medical.animalID = animal.animalID WHERE animalID = '${animalID}' `, function (error, result) {
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

module.exports = {getMedicalHistory}