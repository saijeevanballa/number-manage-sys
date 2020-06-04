var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

function sentMail(body) {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
  );

  var mailOptions = {
    from: process.env.EMAIL,
    to: process.env.TOMAIL,
    subject: "Whatsapp Hub Feedback",
    text: `mail: ${body.email}
    number: ${body.number}
    message: ${body.message}
    `
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports.sendMail = sentMail;
