const express = require('express')

const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

// Routes
router.get('/', list)

function list(req, res, next) {
  Controller.list()
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(data => {
      response.error(req, res, data, 400)
    })
}

module.exports = router
