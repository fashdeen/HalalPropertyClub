// this is where you define the external functions such as the one for email
// and install npm install nodemailer and axios


var axios = require('axios');
var qs = require('qs');
const constants = require('../config/constants');
const nodemailer = require("nodemailer");
const const_values = require("../config/constants");


function email_sender(recipient , subject, message ) {
  
var transporter = nodemailer.createTransport({
  host: const_values.smtp_host,
  port: const_values.smtp_port,
  secure: true, // true for 465, false for other ports
  auth: {
   user: const_values.smtp_user,// generated ethereal user
   pass: const_values.smtp_password, // generated ethereal password
 },
});

var mailOptions = {
  from:  const_values.sender_email, // sender address
    to:  recipient, // list of receivers
    subject: subject, // Subject line
   // text: "Hello world?", // plain text body
    html: message, // html body
};

return transporter.sendMail(mailOptions, function(error, info){
  if (error) {
     console.log(error);
     return {status_code : '1'};
  } else {
     //console.log('Email sent: ' + info.response);
    //console.log( info.response );
    return response = {status_code : '0'};

  }
  
});

}
  
module.exports = { email_sender};