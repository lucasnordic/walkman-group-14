const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petOwners');


//MS1 -> Task 2:
router.post('/', controller.postPetOwner);
router.get('/', controller.viewAll);
router.delete('/', controller.deleteAll);
router.get('/:userId', controller.viewUser);
router.patch('/:userId', controller.editPetOwner);
router.put('/:userId', controller.dubbelEditPetOwner);
router.delete('/:userId', controller.deletePetOwner);

//MS1 -> Task 3:
router.post('/:userId/pets', controller.savePet);
router.get('/:userId/pets', controller.userGetPets);
router.get('/:userId/pets/:petId', controller.getMyFavoritePet);
router.delete('/:userId/pets/:petId', controller.deletePet);

//Export:
module.exports = router;