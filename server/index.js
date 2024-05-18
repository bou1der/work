const config = require('./config.json')
const app = require('./server.js')
const http = require('http').createServer(app)

const PORT = config.port || 8000

http.listen(PORT, () =>{console.log(`${PORT}:Server has been deployment...`)})