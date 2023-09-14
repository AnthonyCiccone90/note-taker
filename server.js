const express = require('express')
const generateUniqueId = require('generate-unique-id');
const app = express()
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

let notes = [];

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = generateUniqueId();

  notes.push(newNote);
  res.json(newNote);

})

app.delete("/api/notes/:id", (req, res) => {
  res.json(newNote.id);
})


  app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})


