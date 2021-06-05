const express = require('express');
const cors = require('cors');
const app = express();
const { sendEmail, contact } = require('./sendMail');
const PORT = process.env.PORT || 3001;
;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join("client/build")))
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }

app.use("/users/", require("./routes/routes"));

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
})

app.post('/api/senddates', contact);

app.post('/api/forma', sendEmail);

app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`)
})