const express = require('express')
const cors = require('cors');
const routes = require('./routes')
app.use(cors({
    origin: 'http://127.0.0.1:5500'
  }));

const app = express()
const port = 3000

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app