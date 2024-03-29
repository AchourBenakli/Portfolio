const express = require('express');
const cors = require('cors');
const app = express();
const { sendEmail, contact } = require('./sendMail');
const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const publicPath = path.join(__dirname, 'client', 'build');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


app.get('/', (req, res) => {
  res.send('GET request to the homepage');
})

app.post('/api/senddates', contact);

app.post('/api/forma', sendEmail);

app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`)
})