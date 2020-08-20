const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
let port = 3000;
let destinataryEmail = "diplouade2020@gmail.com";
let pass = "U4D32020!!";

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/email', function(req, res) {
    let email = req.body.email;
    let send = sendEmail(email, res);   
});

sendEmail = async (email, res) => {
    console.log("email: " , email);    

    var transporter = nodemailer.createTransport({
       service : email.service,
        auth: {
            user: email.user, 
            pass: email.pass, 
        },     
      });

      var mailOptions = {
        from: email.user,
        to: destinataryEmail,
        subject: email.subject,
        text: email.text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {            
            res.send(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent: ' + info.response);
        }
      });        
}





  
  
  