const User = require("../models/User");

const userServices = require("../service/user");
const authService = require('../service/auth')
const error = require("../utlis/error");

const getUsers = async (req, res, next) => {
  /**
   * find , filter, sort , pagination, select
   *
   */
  try {
    const users = await userServices.findUsers();
    return res.status(200).json(users);
  } catch (e) {
    next();
  }
};

const getUserById = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await userServices.findUserByProperty("_id", userId);
    if (!user) {
      throw error("User not found", 404);
    }
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const postUser = async (req, res, next) => {
  const { name, email, password, roles, accountStatus } = req.body;
  try {
    const user = await authService.registerService({
      name,
      email,
      password,
      roles,
      accountStatus,
    });
    return res.status(201).json(user);

  } catch (e) {
    next();
  }
};

const putUserById = (req, res, next) => {};

const patchUserById = (req, res, next) => {};

const deleteUserById = (req, res, next) => {};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  putUserById,
  patchUserById,
  deleteUserById,
};
