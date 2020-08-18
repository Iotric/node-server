'use strict';

const nodeMailer = require('nodemailer');
const Constant   = require('../../config/constant');

console.log(Constant.name,"Constant");

// smtp settings
let transporter = nodeMailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: "08574a98977b32",
        pass: "671012d4747acd"
    }
});

async function sendMail() {
    const mailOptions = {
        from: "ved@iotric.com",
        to: 'ved@iotric.com',
        title:  'Test Title',
        subject: 'Test Subject',
        html: 'Hello Ved'
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error,"error");
        }else{
            console.log('Message sent: ' + info.messageId);
        }
    });
    return true;
}
sendMail();

async function sendWelcomeMail() {
    return "I m welcome";
}

async function sendPasswordResetMail() {
    return "I m reset";
}

async function sendSupportMail() {
    return "I m Support";
}
