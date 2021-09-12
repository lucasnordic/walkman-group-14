const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/hasPets');



router.get('/', (req, res) => {
    res.send('These users Own these pets.');
});

router.post('/', controller.postHasPet);

module.exports = router;