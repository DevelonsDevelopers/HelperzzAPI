const {template} = require("../util/template");
const nodemailer = require('nodemailer');
const User = require("../models/user");

function randomize(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

exports.contractorEmail = async (req, res, next) => {
    let email = req.body.email;
    let transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: {
            user: "tayyabrana5999@gmail.com",
            pass: "OaNLG5CP2HMyV8IA"
        }
    })
    message = {
        from: "tayyabrana5999@gmail.com",
        // to: "tayyabrana5999@gmail.com, bimalntb@gmail.com, abubakar.4983763@gmail.com",
        to: email,
        subject: "Job Invitation",
        text: "You have a new Job Invitation",
        html: template({
            name: "Bridges Inc.",
            customer: "David Brown",
            job: "Need to Repair Roof",
            details: "My roof is badly damaged by some aliens from space directly landed on my roof"
        })
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            res.status(200).json({"responseCode": 205, "message": "Email Failed!"});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        }
    })

}

exports.customerForgotPassword = async (req, res, next) => {
    let email = req.body.email;
    let token = randomize(20) + new Date().valueOf() + randomize(10)
    await User.setToken({ email: email, reset_token: token })
    let transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: {
            user: "tayyabrana5999@gmail.com",
            pass: "OaNLG5CP2HMyV8IA"
        }
    })
    message = {
        from: "tayyabrana5999@gmail.com",
        to: email,
        subject: "Reset Password",
        text:`You can reset password using this link https://staging.helperzz.com/new-password/token/${token}` ,
        // html: template({
        //     name: "Bridges Inc.",
        //     customer: "David Brown",
        //     job: "Need to Repair Roof",
        //     details: "My roof is badly damaged by some aliens from space directly landed on my roof"
        // })
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            res.status(200).json({"responseCode": 205, "message": "Email Failed!"});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        }
    })

}
