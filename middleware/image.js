const multer = require("multer");
// const storage_image = require('../config/storage_image')

const storage = multer.diskStorage({ // config ของ Multer ว่าจะให้เก็บไฟล์ไว้ที่ไหน และ Rename ชื่อไฟล์
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
        // console.log(file);
    }
});

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {  //|gif|GIF
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true)
}


const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
})


module.exports = {upload};





