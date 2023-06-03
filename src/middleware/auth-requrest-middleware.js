const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const {UserService} = require('../services')

function validateAuthRequest(req, res, next) {
    if (!req.body.email || !req.body.password) {
        ErrorResponse.message = "Something went Wrong while authenticating user";

        ErrorResponse.error = new AppError(["Email or password not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}


async function checkAuth(req, res, next){
    try {
        const response = await UserService.isAuthenticated(req.headers['x-access-token']);
        if(response){
            req.user = response;
            next();
        }
    } catch (error) {
        return res
            .status(error.statusCode)
            .json(error);
    }
}




module.exports = {
    validateAuthRequest,
    checkAuth
}