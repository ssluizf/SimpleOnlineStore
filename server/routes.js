const { Router } = require('express')

const routes = Router()

routes.get('/', function (req, res) {
    res.send('hello world')
})

module.exports = routes