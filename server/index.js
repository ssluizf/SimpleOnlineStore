const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://localhost/simple_store', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(() => {
        console.log("Erro de conexão")
    })

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen('3333')