const express = require('express')
const generateUniqueId = require('generate-unique-id');
const app = express()
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
});

app.post('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})



