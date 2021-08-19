const express = require('express')
const app = express();
const myApp = require('./myApp')
require('dotenv').config()
const PORT = process.env.PORT;

app.use(myApp)
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`);
})