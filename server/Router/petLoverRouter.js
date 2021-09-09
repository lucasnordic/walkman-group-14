const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petLovers');

router.post('/api/petLover', controller.postPetLover)
module.exports = router;