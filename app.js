const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('uploads'));//บรรทัดเดียวปร๋อๆเลย

const postMaintenance = require('./api/maintenance/post_maintenance');
const {upload} = require("./middleware/image");
const getMaintenance = require('./api/maintenance/list_maintenance');
const getImage = require('./api/maintenance/img_maintenance')



app.post('/api/postMaintenance',upload.single('image'),postMaintenance.postMaintenance);
app.get('/api/getMaintenance', getMaintenance.listMaintenance);
// app.get('/uploads/:imgName',getImage.picture);



app.listen(3000, () => {
    console.log('Server has started at port 3000')
})
