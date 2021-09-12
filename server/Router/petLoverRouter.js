const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petLovers');

router.post('/api/petlovers', controller.postPetLover)
module.exports = router;