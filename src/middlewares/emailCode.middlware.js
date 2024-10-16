const EmailCode = require('../models/EmailCode');

async function emailCode(req, res, next) {
	const code = require('crypto').randomBytes(64).toString('hex');

	const { id } = req.result;
	const userId = id;

	const body = { code, userId };

	await EmailCode.create(body);

	return res.status(201).json('Usuario creado');
}

module.exports = emailCode;
