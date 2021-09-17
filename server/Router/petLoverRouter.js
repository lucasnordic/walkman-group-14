const express = require('express');
const router = express.Router();
const controller = require('../Controller/petLovers');

//MS1 -> Task 2:
router.post('/', controller.postPetLovers);
router.get('/', controller.getPetLovers);
router.delete('/', controller.deletePetLovers);
router.get('/:userId', controller.getPetLoversById);
router.put('/:userId', controller.putPetLoversById);
router.patch('/:userId', controller.patchPetLoversById);
router.delete('/:userId', controller.deletePetLoversbyId);

//Export:
module.exports = router;
