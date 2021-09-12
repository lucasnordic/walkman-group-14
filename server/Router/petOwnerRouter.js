const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petOwners');

router.post('/api/petOwners', controller.postPetOwner)
module.exports = router;