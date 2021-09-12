const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petLovers');

router.post('/', controller.postPetLover);
router.get('/', (req, res) => {
    res.send('We love and care for animals and do not skin them when their owners are not around');
});
module.exports = router;