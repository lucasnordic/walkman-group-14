const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petOwners');

router.post('/', controller.postPetOwner);

router.get('/', controller.viewAll);

router.delete('/', controller.deleteAll);

router.get('/:userId', controller.viewUser);

router.patch('/:userId', controller.editPetOwner);

router.post('/:userId/pets', controller.savePet);




/*

(a) POST /camels
(b) GET /camels
(c) DELETE /camels
(d) GET /camels/:id
(e) PUT /camels/:id
(f) PATCH /camels/:id
(g) DELETE /camels/:id

*/
module.exports = router;