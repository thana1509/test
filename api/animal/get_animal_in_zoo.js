const db = require("../../config/database");

const getAnimalInZoo = (req, res, next) => {

    db.getConnection(function (err, connection) {
        if (err) {
            res.status(500).json({"status": "Error", "message": "Connection DB Error"})
        } else {//TODO edit query มันต้อง join กันไหมอ่ะ ไม่น่านะเพราะมันไม่ได้เอาข้อมูลอีกตารางมา
            connection.query(`SELECT typeName, COUNT(animalID) AS amount, FROM animaltype INNER JOIN animal on animalType.animalID = animal.animalID`, function (error, result1) {
                connection.release()
                connection.query(`SELECT animalID, animalName, gender, weight, age FROM animal`, function (error, result2) {
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

module.exports = {getAnimalInZoo}

// connection.query(`SELECT typeName, amount, bio FROM maintenance WHERE userID = '001' `, function (error, result) {
//     connection.release()
//     if (error) {
//         res.status(500).json({"status": "Error", "message": `${error.message}`})
//     } else {
//         res.status(200).json({resultCode: "200", status: "SUCCESS", "errorMessage": null, data: result})
//     }
// })