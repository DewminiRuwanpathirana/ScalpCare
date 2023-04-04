const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scalpcare',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected!');
  (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error registering new user');
      } else {
        res.status(200).send('New user registered successfully');
      }
    }
});

// API route for registering a new user
app.post('/api/register', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");  
  const { name, email, password } = req.body;
  connection.query(
    'INSERT INTO databasesc (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
  );
});

// API route for authenticating a user
app.post('/api/login', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");  
    const { email, password } = req.body;
  connection.query(
    'SELECT * FROM databasesc WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error authenticating user');
      } else if (results.length === 0) {
        res.status(401).send('Invalid email or password');
      } else {
        res.status(200).send('User authenticated successfully');
      }
    }
  );
});

app.use(cors({
    origin: "*"
}));
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
