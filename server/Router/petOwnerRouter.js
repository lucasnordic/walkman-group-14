const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petOwners');

router.post('/api/petowners', controller.postPetOwner)
module.exports = router;