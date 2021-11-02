// const db = require("../../config/database");
//
// const picture = (req, res, next) => {
//
//     db.getConnection(function (err, connection) {
//         const refImage = req.params.imgName;
//         if (err) {
//             res.status(500).json({"status": "Error", "message": "Connection DB Error"})
//         } else {
//             connection.query(`SELECT CONCAT('http://localhost:3000/uploads/',image) AS image FROM maintenance WHERE image = '${refImage}' `, function (error, result) {
//                 connection.release()
//                 if (error) {
//                     res.status(500).json({"status": "Error", "message": `${error.message}`})
//                 } else {
//                     res.status(200).json({resultCode: "200", status: "SUCCESS", "errorMessage": null, data: result})
//                 }
//             })
//         }
//     })
// }
//
// module.exports = {picture}