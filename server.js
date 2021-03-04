const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const cors = require('cors');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
  })

})