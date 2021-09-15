const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petOwners');


//Milestone 1 -> Task 2:

router.post('/', controller.postPetOwner);

router.get('/', controller.viewAll);

router.delete('/', controller.deleteAll);

router.get('/:userId', controller.viewUser);

router.patch('/:userId', controller.editPetOwner);

router.put('/:userId', controller.dubbelEditPetOwner);

router.delete('/:userId', controller.deletePetOwner);



//Milestone 1 -> Task 3:

router.post('/:userId/pets', controller.savePet);

router.get('/:userId/pets', controller.userGetPets);


/*
a) POST /cars/:car_id/drivers
(b) GET /cars/:car_id/drivers
(c) GET /cars/:car_id/drivers/:driver_id
(d) DELETE /cars/:car_id/drivers/:driver_id
*/
module.exports = router;