const nodeMailer = require('nodemailer');

const details = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'achourbenakli10@gmail.com',
    pass: 'kgoksfbdkhnpkmio'
  }
}

function contact(req, res) {
  let data = req.body
  let smtpTransport = nodeMailer.createTransport(details);
  let mailOptions = {
    from: data.mailFilled,
    to: `achourbenakli10@gmail.com`,
    subject: `Message from ${data.nameFilled}`,
    html: `
  <h3>Informations</h3>
  <ul>
  <li>Mail: ${data.mailFilled}</li>
  </ul>
  `
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error)
    } else {
      res.send('Success')
    }
  })
  smtpTransport.close();
}


function sendEmail(req, res) {
  let data = req.body
  let smtpTransport = nodeMailer.createTransport(details)
  let mailOptions = {
    from: data.mailFilled,
    to: `achourbenakli10@gmail.com`,
    subject: `Message from ${data.nameFilled}`,
    html: `
    <h3>Informations</h3>
    <ul>
    <li>Name: ${data.nameFilled}</li>
    <li>Number: ${data.numberFilled}</li>
    <li>Mail: ${data.mailFilled}</li>
    </ul>
    <h3>Message</h3>
    <ul>
    <li>Message: ${data.messageFilled}</li>
    </ul>
    `
  }
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error)
    } else {
      res.send('Success')
    }
  })
  smtpTransport.close();
}
module.exports = { sendEmail, contact }
