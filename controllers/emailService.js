const Contractor = require("../models/contractor");
const ServiceRequest = require("../models/serviceRequest")
const {template} = require("../util/template");

exports.contractorEmail = async (req, res, next) => {
    console.log(req.body.email)
        let email = req.body.email;
        const nodemailer = require('nodemailer');
        console.log("Mailer")
        let transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            auth: {
                user: "tayyabrana5999@gmail.com",
                pass: "OaNLG5CP2HMyV8IA"
            }
        })
    console.log(transporter)
        message = {
            from: "tayyabrana5999@gmail.com",
            // to: "tayyabrana5999@gmail.com, bimalntb@gmail.com, abubakar.4983763@gmail.com",
            to: email,
            subject: "Job Invitation",
            text: "You have a new Job Invitation",
            html: template({ name: "Bridges Inc.", customer: "David Brown", job: "Need to Repair Roof", details: "My roof is badly damaged by some aliens from space directly landed on my roof" })
        }
        console.log("WOW")
        await transporter.sendMail(message, function (err, info) {
            if (err) {
                res.status(200).json({"responseCode": 205, "message": "Email Failed!"});
            } else {
                res.status(200).json({"responseCode": 200, "message": "Email Sent!"});
            }
        })

}
