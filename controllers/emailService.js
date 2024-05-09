const {template} = require("../util/template");
const {activateEmail} = require("../util/activateEmail");
const nodemailer = require('nodemailer');
const Customer = require("../models/customer");

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
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "admin@helperzz.com",
            pass: "kpeq gzan azkr qncw"
        }
    })
    message = {
        from: "admin@helperzz.com",
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
    await Customer.setToken({ email: email, reset_token: token })
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "admin@helperzz.com",
            pass: "kpeq gzan azkr qncw"
        }
    })
    message = {
        from: "admin@helperzz.com",
        to: email,
        subject: "Reset Password",
        text:`You can reset password using this link https://staging.helperzz.com/new-password/token/${token}` ,
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            res.status(200).json({"responseCode": 205, "message": "Email Failed!" + err});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        }
    })

}

exports.customerSetPassword = async (email) => {
    let token = randomize(20) + new Date().valueOf() + randomize(10)
    await Customer.setToken({ email: email, reset_token: token })
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "admin@helperzz.com",
            pass: "kpeq gzan azkr qncw"
        }
    })
    message = {
        from: "admin@helperzz.com",
        to: email,
        subject: "Set Password",
        text:`You can set password using this link https://staging.helperzz.com/set-password/token/${token}` ,
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            res.status(200).json({"responseCode": 205, "message": "Email Failed!" + err});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        }
    })

}

exports.contractorRegistration = async (req, res, next) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "admin@helperzz.com",
            pass: "kpeq gzan azkr qncw"
        }
    })
    message = {
        from: "admin@helperzz.com",
        to: req.body.email,
        subject: "We will be in touch shortly",
        text:`Thank you for showing interest in Helperzz, We'll get back to you shortly` ,
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            res.status(200).json({"responseCode": 205, "message": "Email Failed!" + err});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        }
    })
}

exports.verifyEmail = async (email) => {
    let token = randomize(20) + new Date().valueOf() + randomize(10)
    await Customer.setToken({ email: email, reset_token: token })
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "admin@helperzz.com",
            pass: "kpeq gzan azkr qncw"
        }
    })
    message = {
        from: "admin@helperzz.com",
        to: email,
        subject: "Activate your account",
        text: "",
        html: activateEmail({
            link: `https://staging.helperzz.com/verify-account/token/${token}`,
        })
    }
    transporter.sendMail(message, function (err, info) {
        console.log(err + " --- " + info)
        // if (err) {
        //     res.status(200).json({"responseCode": 205, "message": "Email Failed!" + err});
        // } else {
        //     res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        // }
    })
}

exports.approveLead = async (req, res, next) => {
    let email = req.body.email;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "admin@helperzz.com",
            pass: "kpeq gzan azkr qncw"
        }
    })
    message = {
        from: "admin@helperzz.com",
        to: email,
        subject: "Your lead is approved",
        text:`You'll start getting contractor requests shortly` ,
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            res.status(200).json({"responseCode": 205, "message": "Email Failed!" + err});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        }
    })
}

exports.approveReview = async (req, res, next) => {
    let email = req.body.email;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "admin@helperzz.com",
            pass: "kpeq gzan azkr qncw"
        }
    })
    message = {
        from: "admin@helperzz.com",
        to: email,
        subject: "Your Review is live",
        text:`Thank you for taking your time. Your feedback matters for us` ,
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            res.status(200).json({"responseCode": 205, "message": "Email Failed!" + err});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        }
    })
}

exports.acceptContractor = async (email, content) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "admin@helperzz.com",
            pass: "kpeq gzan azkr qncw"
        }
    })
    message = {
        from: "admin@helperzz.com",
        to: email,
        subject: "Congratulations! You are live",
        text:`Thank you for taking your time. You will start receiving leads from customer soon` ,
        html: `${content}`
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            res.status(200).json({"responseCode": 205, "message": "Email Failed!" + err});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        }
    })
}

exports.rejectContractor = async (email, content) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "admin@helperzz.com",
            pass: "kpeq gzan azkr qncw"
        }
    })
    message = {
        from: "admin@helperzz.com",
        to: email,
        subject: "We're sorry",
        // text:`You are currently not eligible`,
        html: `${content}`
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            res.status(200).json({"responseCode": 205, "message": "Email Failed!" + err});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        }
    })
}

exports.infoContractor = async (req, res, next) => {
    let email = req.body.email;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "admin@helperzz.com",
            pass: "kpeq gzan azkr qncw"
        }
    })
    message = {
        from: "admin@helperzz.com",
        to: email,
        subject: "We're sorry",
        text:`You are currently not eligible` ,
        html: req.body.content
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            res.status(200).json({"responseCode": 205, "message": "Email Failed!" + err});
        } else {
            res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
        }
    })
}
