const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');


// Định nghĩa các tuyến đường API ở đây

// user đăng ký
router.post('/register',userController.upload,userController.createUser)

// user đăng nhập
router.post('/login', userController.loginUser);


module.exports = router;
