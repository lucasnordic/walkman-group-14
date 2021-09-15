const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/petLovers');

router.post('/', controller.postPetLover);
router.get('/', (req, res) => {
});
module.exports = router;