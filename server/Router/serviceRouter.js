const express = require('express');
const router = express.Router();
const controller = require('../Controller/serviceController');

//TODO: could be additionally practised for MS1-task 3
router.post('/:petLoverId/services', controller.postServicesByPetLoverId);
router.get('/:petLoverId/services', controller.getServicesByPetLoverId);
router.get('/:petLoverId/services/:serviceId', controller.getServiceByPetLoverById);
router.delete('/:petLoverId/services/:serviceId', controller.deleteServiceByPetLoverId);

module.exports = router;
