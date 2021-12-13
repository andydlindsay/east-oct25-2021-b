const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 12345;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const todos = [
  {
    id: 'abc',
    name: 'Pet the squirrels',
    completed: false
  },
  {
    id: 'def',
    name: 'Show squirrels to class',
    completed: true
  },
  {
    id: 'ghi',
    name: 'Hang out with squirrels outside',
    completed: false
  },
]

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
