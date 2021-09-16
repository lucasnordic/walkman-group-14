const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/serviceController');

router.post('/api/services', controller.postService)
module.exports = router;
