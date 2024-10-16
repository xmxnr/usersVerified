const catchError = require('../utils/catchError');
const User = require('../models/User');
const {
	getAllServices,
	createServices,
	getOneServices,
	deleteServices,
	updateServices,
} = require('../services/user.services');

const getAll = catchError(async (req, res) => {
	const results = await getAllServices(req.body);
	return res.json(results);
});

const create = catchError(async (req, res) => {
	const result = await createServices({
		...req.body,
		password: req.hashPassword,
	});
	return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
	const { id } = req.params;
	const result = getOneServices(id);
	if (!result) return res.sendStatus(404);
	return res.json(result);
});

const remove = catchError(async (req, res) => {
	const { id } = req.params;
	const result = await deleteServices(id);
	if (!result) return res.sendStatus(404);
	return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
	const { id } = req.params;

	const fieldToDelete = ['password', 'email', 'isVerified'];

	fieldToDelete.forEach((field) => delete req.body[field]);

	const result = await updateServices(req.body, id);
	if (result[0] === 0) return res.sendStatus(404);
	return res.json(result[1][0]);
});

const login = catchError(async (req, res) => {
	const user = req.userlogged;
	return res.json({ user });
});
module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update,
	login,
};
