const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let students = [];

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const student = req.body;
  if (!student.name || !student.age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }
  students.push(student);
  res.status(201).json({ message: 'Student added', student });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
