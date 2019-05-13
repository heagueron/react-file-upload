// Requires
const express = require('express')
const cors = require('cors')

const upload = require('./upload')


// Define the server
const server = express()

// Configure the CORS
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

// Make express use the cors-middleware 
server.use(cors(corsOptions))

// Routes definition
server.post('/upload', upload)

// Start the server
server.listen(8000, () => {
  console.log('My server is running!')
})