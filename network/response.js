exports.success = function(req, res, data, status) {
  levelType = validateType(status)

  function validateType(status) {
    if (status === 200) {
      return 'success'
    } else if (status === 500) {
      return 'error'
    }
  }

  res.status(status).send({
    error: false,
    status: status,
    body: data,
    handler: {
      level: levelType,
      title: 'oK',
      message: 'Hola desde el back'
    }
  })
}

exports.error = function(req, res, data, status) {
  levelType = validateType(status)

  function validateType(status) {
    if (status === 401) {
      return 'warning'
    } else {
      return 'info'
    }
  }

  res.status(status).send({
    error: false,
    status: status,
    body: [data],
    handler: {
      level: levelType,
      title: status,
      message: data
    }
  })
}
