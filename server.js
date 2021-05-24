const express = require('express');
const cors = require('cors');
const app = express();
const sendMail = import(sendMail.js);
const contact = import(contact.js);
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
})

app.post('/api/forma', sendEmail(req, res));

app.post('/api/senddates', (req, res) => {
  res.send('Success')
})


app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`)
})