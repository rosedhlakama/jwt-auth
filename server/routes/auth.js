const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const {
  userExists,
  getUserByName,
  createUser } = require('../db/users')

const router = express.Router()

// TODO: create POST routes for /auth/signin and /auth/register

module.exports = router
