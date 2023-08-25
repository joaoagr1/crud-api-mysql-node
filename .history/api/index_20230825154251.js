/* const express = require('express')
const cors = require('cors');
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)
const corsOptions = {
    origin: 'http://example.com', // Origens permitidas (ou use um array para várias origens)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
    credentials: true, // Permitir envio de cookies e autenticação
  };
  
  app.use(cors(corsOptions));

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app */