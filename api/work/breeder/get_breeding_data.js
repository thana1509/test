const db = require("../../../config/database");

const getBreedingData = (req, res, next) => {
    const userID = req.query.userID

    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {//TODO edit query
            connection.query(`SELECT breedingID, breedingName, status, typeName, breedingDetail, date FROM breeding INNER JOIN animaltype on breeding.typeID = animaltype.typeID`, function (error, result) {
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

module.exports = {getBreedingData}

// {
//     "id": "",
//     "name": "",
//     "detail":"",
//     "animal_id": "",
//     "type_name": "",
//     "date": "",
// },