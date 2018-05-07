require("dotenv").config() 

var http = require('http');
var fs = require('fs');
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const server = express()

//mongo setup
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connection Sucessful')
})
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

//server static react files
server.use(express.static(__dirname + '/client/build/'));
server.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

//view engine setup
// // sever.set('views', path.join(__dirname, 'views'))
// server.set('view engine', 'hbs')

server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))
server.use(cookieParser())
server.use(express.static(path.join(__dirname, 'public')))


//Controllers
// const userController = require('.routes/userController,js')
// server.use('/apu/users')

//catch 404 
server.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var payload = fs.readFileSync('./data_set.json', 'utf8');
  res.end(payload);
}).listen(1337);

console.log('Server started...Listening on port 1337');

module.exports = server 