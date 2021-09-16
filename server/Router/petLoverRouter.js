const express = require('express');
const router = express.Router();
const controller = require('../Controller/petLovers');


router.post('/', controller.postPetLover);
// router.get('/', controller.getPetLover);


//Milestone 1 -> Task 3:

router.post('/:petLoverId/services', controller.postPetLoverService);

router.get('/:petLoverId/services', controller.getPetLoverServices);

router.get('/:petLoverId/services/:serviceId', controller.getPetLoverService);

// (d) DELETE /cars/:car_id/drivers/:driver_id


module.exports = router;
