const db = require("../../config/database");

const deleteMaintenance = (req, res, next) => {

    const ref = req.params.maintenanceID
    if (ref == null) {
        res.status(500).json({"status": "Error", "message": "กรุณากรอกข้อมูลใหม่"})
    } else {
        db.getConnection(function (err, connection) {
            if (err) {
                res.status(500).json({"status": "Error", "message": "Connection DB Error"})
            } else {
                connection.query(`DELETE FROM maintenance WHERE maintenanceID = '${ref}'`, function (error, result) {
                    connection.release()
                    if (error) {
                        res.status(500).json({"status": "Error", "message": `${error.message}`})
                    } else {
                        res.status(200).json({
                            resultCode: "200",
                            status: "SUCCESS",
                            "errorMessage": null,
                            message: `Complete Deleted maintenanceID = ${ref}`
                        })
                    }
                })
            }
        })
    }
}

module.exports = {deleteMaintenance}

// DELETE FROM table_name WHERE condition;