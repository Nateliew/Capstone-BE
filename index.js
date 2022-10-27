const cors = require("cors");
const express = require("express");
require("dotenv").config();
const nodemailer = require("nodemailer");

// const PORT = process.env.PORT;
const PORT = process.env.PORT || 8080;

const app = express();
const { auth } = require("express-oauth2-jwt-bearer");

const router = require("./routers/routes")(auth, express);

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

app.use(router);

// app.post("/email/sendReport", (req, res) => {
//   mail.send(req.body, (res) => {
//     res.status(200).json({ status: res ? "ok" : "error" });
//   });
// });

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "demo.rockket@gmail.com",
//     pass: "rocket@123",
//   },
// });

// exports.send = function (data, callback) {
//   let mailOptions = {
//     from: '"demo.rockket@gmail.com',
//     to: "demo.rockket@gmail.com",
//     subject: "Attachment experiment",
//     text: "HIIII",
//     attachments: [
//       {
//         filename: "attachment.pdf",
//         content: req.body.pdf,
//         contentType: "application/pdf",
//         encoding: "base64",
//       },
//     ],
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       callback(false);
//       return console.log(error);
//     }
//     callback(true);
//   });
// };

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
