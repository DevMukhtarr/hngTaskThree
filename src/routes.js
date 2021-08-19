    const express = require('express')
    const app = express();
    let customer = require('./schema');
    let nodemailer = require('nodemailer')
    require('dotenv').config();

    //middleware to access form
    app.use(express.urlencoded({
        extended: false
    }))

    //middleware to access form
    app.use(express.json())

    //users option to send message
    app.post('/send_message', (req, res) =>{
            let name = req.body.name;
            let email = req.body.email;
            let ourUser = new customer({
                name: name,
                email: email,
                subject: req.body.subject,
                message: req.body.message
            }).save((error, data) =>{
                if(error){
                    console.log("there's an error")
                }else{
                    console.log(`${data.name}, sent you a message`)
                }
            })

            let transport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            })
            let mailOptions = {
                from: process.env.EMAIL,
                to: email, 
                subject: `Hello ${name}`,
                text: `Hello ${name}, your message has been sent to Mukhtar, you'll get a response as soon as possible`
            }

            transport.sendMail(mailOptions, (err, data) =>{
                if(err){
                    console.log(err)
                }else{
                    console.log('Email sents')
                }
            })

            res.send("email will be sent")
        })

    


        module.exports = app