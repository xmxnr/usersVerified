const User = require('../models/User');

const getAllServices = async () => {
	return User.findAll();
};

const createServices = async (user) => {
	return User.create(user);
};

const getOneServices = async (id) => {
	return await User.findByPk(id);
};

const updateServices = async (user, id) => {
	return User.update(user, {
		where: { id },
		returning: true,
	});
};

const deleteServices = async (id) => {
	return User.destroy({ where: { id } });
};

module.exports = {
	getAllServices,
	createServices,
	getOneServices,
	updateServices,
	deleteServices,
};
