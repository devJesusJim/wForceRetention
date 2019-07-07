const nodemailer = require('nodemailer');
const checkEnv = require('./check_env')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: checkEnv.isLiveServer ? 'firestoreangular0@gmail.com' : 'snow930123@gmail.com',
        pass: checkEnv.isLiveServer ? 'nipamonalisa1' : 'cdmxjtcbeuqdzkjq'
    }
});

exports.sendEmail = function (req, res, next) {
    //Extract the from to subject and email body from the request
    const { from, to, subject, body } = req.body;

    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            next(error)
        } else {

            console.log('Email sent: ' + info.response);
            res.status(200).send({
                "success": true,
                "message": "Email successfully sent!",
            })
        }
    });
};


exports.SendEmailToEmployee = function (email) {
    const { from, to, subject, body } = email;
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: body
    };
    return new Promise(function (resolve, reject) {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
                reject(error)
            } else {
                console.log(info);
                resolve({
                    "success": true,
                    "message": "Email successfully sent!",
                })
            }
        });
    })
};
