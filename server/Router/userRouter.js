const express = require ('express');
const router = express.Router();
const controller = require ('../Controller/userController');

router.post('/api/user', controller.postUser)
module.exports = router;