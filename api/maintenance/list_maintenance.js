const db = require("../../config/database");
//192.168.1.104
//192.168.1.101

const listMaintenance = (req, res, next) => {

    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {
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

module.exports = {listMaintenance}
