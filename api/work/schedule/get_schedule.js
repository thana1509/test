const db = require("../../../config/database");

const getSchedule = (req, res, next) => {
    // const date = req.query.date
    const userID = req.query.userID

    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {//TODO edit query
            connection.query(`SELECT time, scheduleName, status FROM schedule 
                              INNER JOIN calendar on schedule.calendarID = calendar.calendarID  
                              INNER JOIN user on user.userID = calendar.userID WHERE userID = '${userID}' `, function (error, result) {
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