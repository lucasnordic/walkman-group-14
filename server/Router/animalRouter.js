const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/animals');

router.post('/api/animals', controller.postAnimal)
module.exports = router;