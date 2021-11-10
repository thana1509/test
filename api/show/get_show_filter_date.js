const db = require("../../config/database");

const getShowFilterDate = (req, res, next) => {
    const date = req.query.date
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {
            connection.query(`SELECT date, time, showName, totalAudience FROM show WHERE show = ${'date'}`, function (error, result) {
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

module.exports = {getShowFilterDate}










// WHERE date = '${date}'