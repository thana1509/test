const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('uploads'));//บรรทัดเดียวปร๋อๆเลย

const postMaintenance = require('./api/maintenance/post_maintenance');
const {upload} = require("./middleware/image");
const getMaintenance = require('./api/maintenance/list_maintenance');
const deleteMaintenance = require('./api/maintenance/delete_maintenance');
const updateMaintenance = require('./api/maintenance/update_maintenance');
const getShow = require('./api/show/get_show');
const getShowFilterDate = require('./api/show/get_show_filter_date');
// const getVisitor = require('./api/visitor/get_visitor');
const getAnimalInZoo = require('./api/animal/get_animal_in_zoo');
const getAnimalInZooFilterId = require('./api/animal/get_animal_in_zoo_filter_id')
const getResearchData = require('./api/work/Researcher/get_research_data')
const getBreedingData = require('./api/work/breeder/get_breeding_data')
const getMedicalHistory = require('./api/work/veterinary/get_medical_history')
const getVaccineHistory = require('./api/work/veterinary/get_vaccine_history')
const getSchedule = require('./api/work/schedule/get_schedule')


app.post('/api/postMaintenance', upload.single('image'), postMaintenance.postMaintenance);
app.get('/api/getMaintenance', getMaintenance.listMaintenance);
app.delete('/api/deleteMaintenance/:maintenanceID', deleteMaintenance.deleteMaintenance);
app.put('/api/updateMaintenance/:maintenanceID', upload.single('image'), updateMaintenance.updateMaintenance);
app.get('/api/getShow', getShow.getShow);
app.get('/api/getShowFilterDate', getShowFilterDate.getShowFilterDate);
// app.get('/api/getVisitor',getVisitor.getVisitor);
app.get('/api/getAnimalInZoo', getAnimalInZoo.getAnimalInZoo);
app.get('/api/getAnimalInZooFilterId', getAnimalInZooFilterId.getAnimalInZooFilterId);
app.get('./api/getResearchData', getResearchData.getResearchData);
app.get('./api/getBreedingData', getBreedingData.getBreedingData);
app.get('./api/getMedicalHistory', getMedicalHistory.getMedicalHistory);
app.get('./api/getVaccineHistory', getVaccineHistory.getVaccineHistory);
app.post('./api/getSchedule', getSchedule.getSchedule);


app.listen(3000, () => {
    console.log('Server has started at port 3000')
})
