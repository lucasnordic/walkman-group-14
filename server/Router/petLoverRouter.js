const express = require('express');
const router = express.Router();
const controller = require('../Controller/petLovers');

router.post('/', controller.postPetLover);
<<<<<<< server/Router/petLoverRouter.js
// router.get('/', controller.getPetLover);

// 3.
// (a) POST /petLover/:petLoverId/service
router.post('/:petLoverId/services', controller.postPetLoverService);

// (b) GET /petLover/:petLoverId/service
router.get('/:petLoverId/services', controller.getPetLoverServices);

// (c) GET /petLover/:petLoverId/service/:serviceId
//router.get('/petOwner/:petOwner_id/pets/:pet_id', controller.getPetFromOwner);

// (d) DELETE /petLover/:petLoverId/service/:serviceId
//router.delete('/petOwner/:petOwner_id/pets/:pet_id', controller.deletePetFromOwner);


module.exports = router;