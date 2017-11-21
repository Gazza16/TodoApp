const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

let students = ['simon', 'scott'];

app.use(bodyParser.json())

app.get('/students', (req, res) => {
  res.send(students);
})

app.post('/students', (req, res) => {
  students.push(req.body.name);
  res.send(students);
})

app.listen(port);
