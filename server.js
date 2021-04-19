const express = require('express');
const nodeMailer = require('nodemailer');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
})

app.post('/api/forma', (req, res) => {
  let data = req.body
  let smtpTransport = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'achourbenakli10@gmail.com',
      pass: 'kgoksfbdkhnpkmio'
    }
  });
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
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error)
    } else {
      res.send('Success')
    }
  })

  smtpTransport.close();
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`)
})
