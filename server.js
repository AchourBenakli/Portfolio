const express = require('express'); //On va chercher notre dependance dans notre module
const nodeMailer = require('nodemailer');//On va chercher notre dependance dans notre module
const cors = require('cors');//On va chercher notre dependance dans notre module
// const bodyParser = require('body-parser');//On va chercher notre dependance dans notre module


const app = express();//On cree un instance de express pour faire marcher notre Api rest(le lien entre la demande client et la reponse du server)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/Contact', (req, res) => {
  res.send('GET request to the homepage');
})

app.post('/api/forma', (req, res) => {
  let data = req.body
  let smtpTransport = nodeMailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'achourbenakli10@gmail.com',
      pass: 'Dafr9212Wweeg'
    }
  });
  let mailOptions = {
    from: data.emailFilled,
    to: `achourbenakli@yahoo.fr`,
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