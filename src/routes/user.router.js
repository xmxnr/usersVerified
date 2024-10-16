const {
	getAll,
	create,
	getOne,
	remove,
	update,
	login,
	logged,
} = require('../controllers/user.controllers');
const express = require('express');
const hashPassword = require('../middlewares/hashPassword.middleware');
const loginMiddleware = require('../middlewares/login.middleware');
const { verifyJWT } = require('../utils/verifyJWT');
const sessionJWT = require('../middlewares/sessionJWT.middleware');
const emailCode = require('../middlewares/emailCode.middlware');

const routerUser = express.Router();

routerUser
	.route('/')
	.get(verifyJWT, getAll)
	.post(hashPassword, create, emailCode);

routerUser.route('/login').post(loginMiddleware, sessionJWT, login);

routerUser.route('/me').get(verifyJWT, logged);

routerUser
	.route('/:id')
	.get(verifyJWT, getOne)
	.delete(verifyJWT, remove)
	.put(verifyJWT, update);

module.exports = routerUser;
