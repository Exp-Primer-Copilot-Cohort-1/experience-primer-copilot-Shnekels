// Create web server

// Import node modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Import local modules
const { comments } = require('./data/comments');

// Create server
const app = express();

// Apply middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// Create routes
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    ...req.body,
  };
  comments.push(newComment);
  res.json(newComment);
});

// Create port
const port = 4001;

// Listen to port
app.listen(port, () => {
  console.log(`Web server is listening to port ${port}`);
});