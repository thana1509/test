const db = require("../../../config/database");

const getVaccineHistory = (req, res, next) => {
    const animalID = req.query.animalID

    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {//TODO edit query
            connection.query(`SELECT vaccineID, vaccineName, date, time FROM vaccine INNER JOIN animal ON vaccine.animalID = animal.animalID WHERE animalID = '${animalID}' `, function (error, result) {
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

module.exports = {getVaccineHistory}