import nodeMailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST, //SMTP-simple mail transfer protocol
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD, //use 2 step verification then add password
    },
  });
  const options = {
    from: process.env.SMTP_MAIL, //yeh mail hume kis side se bhejni h
    to: email, //kisko email bhej rha ho
    subject: subject,
    text: message,
  };

  await transporter.sendMail(options);
};
