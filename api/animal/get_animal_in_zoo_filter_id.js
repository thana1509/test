const db = require("../../config/database");

const getAnimalInZooFilterId = (req, res, next) => {
    const userID = req.query.userID
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {//TODO edit query
            connection.query(`SELECT typeName, COUNT(animalID) AS amount, FROM animaltype INNER JOIN animal on animalType.animalID = animal.animalID`, function (error, result1) {
                connection.release()
                connection.query(`SELECT animalID, animalName, gender, weight, age FROM maintenance`, function (error, result2) {
                    connection.release()
                    if (error) {
                        res.status(500).json({"status": "Error", "message": `${error.message}`})
                    } else {
                        res.status(200).json({resultCode: "200", status: "SUCCESS", "errorMessage": null, data: result1,result2})
                    }
                })
            })
        }
    })
}

module.exports = {getAnimalInZooFilterId}