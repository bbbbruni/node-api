const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const filePath = `${__dirname}/data/users.json`;

let user = {
  "user4" : {
     "name" : "mohit",
     "password" : "password4",
     "profession" : "teacher",
     "id": 4
  }
}

// Get users
app.get('/listUsers', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    res.end(data);
  });
});

// Get specific user
app.get('/user/:id', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    data = JSON.parse(data);

    res.end(JSON.stringify(data[`user${req.params.id}`]));
  });
});

// Save new user on file
app.post('/addUser', (req, res) => {
  // Reading file to existing users
  fs.readFile(filePath, 'utf8', (err, data) => {
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    res.end(JSON.stringify(data));

    // save data on file
    fs.writeFile(filePath, JSON.stringify(data), 'utf8', () => {});
  });
});

const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port
  console.log("Server running on:", port);
})