const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Rehearsal Scheduler Web App API running.');
});

// Placeholder for routes (auth, events, users, setlists, messages, etc.)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
