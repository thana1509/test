const db = require("../../../config/database");

const getSchedule = (req, res, next) => {
    const date = req.query.date
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {//TODO edit query
            connection.query(`SELECT maintenanceID, maintenanceDetail, location, CONCAT('http://localhost:3000/',image) AS image,  status, createDtm FROM maintenance WHERE userID = '001' `, function (error, result) {
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

module.exports = {getSchedule}