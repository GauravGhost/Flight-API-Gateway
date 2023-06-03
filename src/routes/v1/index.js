const express = require('express');

const {InfoController} = require('../../controllers');
const {AuthRequestMiddleware} = require('../../middleware');
const userRouter = require('./user-routes');

const router = express.Router();

router.get('/info', AuthRequestMiddleware.checkAuth, InfoController.info);
router.use('/user', userRouter);

module.exports = router;