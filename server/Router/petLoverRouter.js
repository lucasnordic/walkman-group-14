const express = require('express');
const router = express.Router();
const controller = require('../Controller/petLovers');


router.post('/', controller.postPetLover);
router.get('/', controller.getPetLover);
router.delete('/', controller.deleteAll);
router.get('/:userId', controller.viewUser);
router.patch('/:userId', controller.editPetOwner);
router.put('/:userId', controller.dubbelEditPetOwner);
router.delete('/:userId', controller.deletePetOwner);

//Export:
module.exports = router;
