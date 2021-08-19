const express = require('express')
const app = express();
let connect = require('./src/connect');
let schema = require('./src/schema');
let routes = require('./src/routes')

app.use('/views', express.static(process.cwd() + '/views'))//accessing the image file

app.use(connect);

app.use(routes);


module.exports = app