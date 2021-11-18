const db = require("../../config/database");

// ************** ยังติดตรงต้องใส่รูปทุกครั้งถึงจะผ่าน ****************
const updateMaintenance = (req, res, next) => {
    const {maintenanceDetail, location} = req.body;
    const image = req.file.filename;

    const ref = req.params.maintenanceID;
    if (ref == null) {
        res.status(500).json({"status": "Error", "message": "กรุณากรอกข้อมูลใหม่"})
    } else {
        db.getConnection(function (err, connection) {
            if (err) {
                res.status(500).json({"status": "Error", "message": "Connection DB Error"})
            } else {
                connection.query(`UPDATE maintenance
                                  SET maintenanceDetail =  CASE WHEN '${maintenanceDetail}' = "" OR '${maintenanceDetail}' = 'undefined' THEN maintenanceDetail ELSE '${maintenanceDetail}' END,
                                      location =  CASE WHEN '${location}' = "" OR '${location}' = 'undefined' THEN location ELSE '${location}' END,
                                      image =  CASE WHEN '${image}' = "" OR '${image}' = 'undefined' THEN image ELSE '${image}' END,
                                      updateDtm = CURRENT_TIMESTAMP 
                                  WHERE maintenanceID = '${ref}'`, function (error, result) {
                    connection.release()
                    if (error) {
                        res.status(500).json({"status": "Error", "message": `${error.message}`})
                    } else {
                        res.status(200).json({
                            resultCode: "200",
                            status: "SUCCESS",
                            "errorMessage": null,
                        })
                    }
                })
            }
        })
    }
}

module.exports = {updateMaintenance}


// UPDATE Customers
// SET ContactName='Juan'
// WHERE Country='Mexico';
//


// `UPDATE maintenance
//                               SET maintenanceDetail = '${maintenanceDetail}', location= '${location}', image = '${image}'
//                               WHERE maintenanceID = '${ref}';`



