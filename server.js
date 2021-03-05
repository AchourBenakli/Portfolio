const express = require('express'); //On va chercher notre dependance dans notre module
const nodeMailer = require('nodemailer');//On va chercher notre dependance dans notre module
const cors = require('cors');//On va chercher notre dependance dans notre module


const app = express();//On cree un instance de express pour faire marcher notre Api rest(le lien entre la demande client et la reponse du server)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', () => {
  resizeBy.send('Welcome to my form')
})

app.post('/api/forma', (req, res) => {
  let data = req.body
  let smtpTransport = nodeMailer.createTransport({
    service: 'Yahoo',
    port: '465',
    auth: {
      user: 'achourbenakli@yahoo.fr',
      pass: 'Dafr9212Wweoa'
    }
  });
  let mailOptions = {
    from: data.email,
    to: `achourbenakli@yahoo.fr`,
    subject: `Message from ${data.name}`,
    html: `
  <h3>Informations</h3>
  <ul>
  <li>Name: ${data.name}</li>
  <li>Name: ${data.number}</li>
  <li>Name: ${data.mail}</li>
  </ul>

  <h3>Message</h3>
  <ul>
  <li>Name: ${data.message}</li>
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