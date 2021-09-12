const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petOwners');

router.post('/api/petowners', controller.postPetOwner);
router.get('/api/petowners', (req, res) => {
    res.send('We want to get rid of our pets just for a short while... Pleeease!... HELP US!');
});
module.exports = router;