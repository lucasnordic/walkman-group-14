const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petLovers');

router.post('/api/petlovers', controller.postPetLover);
router.get('/api/petlovers', (req, res) => {
    res.send('We love and care for animals and do not skin them when their owners not around');
});
module.exports = router;