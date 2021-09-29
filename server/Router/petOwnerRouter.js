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

/*------------------------------------------------------------
------------------------------------------------------------*/
router.post('/:userId/pets', controller.postPetsByPetOwnerId);
router.get('/:userId/pets', controller.getPetsByPetOwnerId);
router.get('/:userId/pets/:petId', controller.getPetsById);
router.delete('/:userId/pets/:petId', controller.deletePetsbyId);

/*------------------------------------------------------------
------------------------------------------------------------*/

//Export:
module.exports = router;