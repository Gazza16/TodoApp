const express = require('express');
const ToDoExpressApp = express();
const port = 3000;
const bodyParser = require('body-parser');

let todo = ["Invade Russia", "Insult Mexico", "Tweet"]

ToDoExpressApp.use(bodyParser.json())

ToDoExpressApp.get('/api/todo', (req, res) => {
  res.send(todo);
})

ToDoExpressApp.post('/api/todo', (req, res) => {
  students.push(req.body.name);
  res.send(todo);
})

ToDoExpressApp.use ((req, res) => {
  res.status(500).send('404')
})

ToDoExpressApp.listen(port);
