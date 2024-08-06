const express= require('express')
const router = express.Router();
const {getDoctors,getEhrs,addDoctor}= require('../controllers/doctorController')
router.route('/').get(getDoctors).post(addDoctor)

module.exports = router;