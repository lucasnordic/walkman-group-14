const express = require('express');
const router = express.Router();
const petOwners = require('../Controller/petOwners');
const petLovers = require('../Controller/petLovers');

router.post('/loginowner', petOwners.loginPetOwner);
router.post('/loginlover', petLovers.loginPetLover);

//Export:
module.exports = router;