const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petOwners');


router.post('/', controller.postPetOwners);
router.get('/', controller.getPetOwners);
router.delete('/', controller.deletePetOwners);
router.get('/:userId', controller.getPetOwnersById);
router.put('/:userId', controller.putPetOwnersById);
router.patch('/:userId', controller.patchPetOwnersById);
router.delete('/:userId', controller.deletePetOwnersById);

//Export:
module.exports = router;