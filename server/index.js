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
