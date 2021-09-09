const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/animals');

router.post('/api/animal', controller.postAnimal)
module.exports = router;