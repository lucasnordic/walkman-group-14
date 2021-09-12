const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/animals');

router.post('/api/animals', controller.postAnimal);

router.get('/api/animals', (req, res) => {
    res.send('Hello Pets! You are gonna be stored in here!')
});

module.exports = router;