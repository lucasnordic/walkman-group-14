const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petOwners');

router.post('/api/petOwner', controller.postPetOwner)
module.exports = router;