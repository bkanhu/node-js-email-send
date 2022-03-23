var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
   service: "Gmail",
   auth: {
       user: "user@gmail.com", // Enter your email id of Gmail here
       pass: "password" // Enter your password here
   }
});

var mailOptions = {
    to: ['email@example.com','email2@example.com','email3@example.com','email@example.com'], // write the email address here
    subject: "Subject Here", // Wire the subject of mail here
    html: "<h1>Welcome.</h1> <p>Here the link for invitation <a href='https://google.com/'>Link to google</a></p>." // Write the body of email here
}
smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log("Message sent: " , response);
    }
})