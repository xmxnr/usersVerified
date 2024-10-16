const {
	getAll,
	create,
	getOne,
	remove,
	update,
	login,
} = require('../controllers/user.controllers');
const express = require('express');
const hashPassword = require('../middlewares/hashPassword.middleware');
const loginMiddleware = require('../middlewares/login.middleware');

const routerUser = express.Router();

routerUser.route('/').get(getAll).post(hashPassword, create);

routerUser.route('/login').post(loginMiddleware, login);

routerUser.route('/:id').get(getOne).delete(remove).put(update);

module.exports = routerUser;
