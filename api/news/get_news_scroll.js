const db = require("../../config/database");

const getNewsScroll = (req, res, next) => {
    // const date = req.query.date ไม่ใช้เเล้วเพราะดึงของวันปัจจุบันเท่านั้น
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {
            connection.query(`SELECT date, time, showName, totalAudience FROM shows WHERE DATE(date) = CURDATE() AND isHighlight = false`, function (error, result) {
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

module.exports = {getNewsScroll}


