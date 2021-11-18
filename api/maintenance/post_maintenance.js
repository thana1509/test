const db = require("../../config/database");


const postMaintenance = (req, res, next) => {
    const {maintenanceDetail, location} = req.body;
    const image = req.file.filename;
    // console.log(image.originalname);

    if (maintenanceDetail, location, image == null) {
        res.status(500).json({"status": "Error", "message": "กรุณากรอกข้อมูลใหม่"})
    } else {
        db.getConnection(function (err, connection) {
            if (err) {
                res.status(500).json({"status": "Error", "message": "Connection DB Error"})
            } else {
                connection.query(`INSERT INTO maintenance(maintenanceDetail,location,image)
     VALUES('${maintenanceDetail}', '${location}', '${image}')`, function (error, result) {
                    connection.release()
                    if (error) {
                        res.status(500).json({"status": "Error", "message": `${error.message}`})
                    } else {
                        console.log(req.file);
                        res.status(200).json({resultCode: "200", status: "SUCCESS", "errorMessage": null})
                        // return res.status(500).json({status: "Error", message: err})
                    }
                })
            }
        })
    }


    // console.log(req.file);
    // return res.status(400).send({
    //     message: "upload success",
    // })

}

module.exports = {postMaintenance}