const express = require('express');

const { UserController } = require('../../controllers')
const { AuthRequestMiddleware } = require('../../middleware')
const router = express.Router();

router.post('/signup', AuthRequestMiddleware.validateAuthRequest, UserController.signup)
router.post('/signin', AuthRequestMiddleware.validateAuthRequest, UserController.signin)


module.exports = router;