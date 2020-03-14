
const express = require('express');
const server = express();
const Users = require('./data/db')


server.use(express.json());

server.get('/', (req, res) => {
    res.send ("Set Up Server");
})


server.get('/api/users', (req, res) => {
    Users.find(req.query)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the hubs',
      });
    });
  });
// server
// .route('/api/users')
// .get( (req, res) => {
//     res.send ("Users Page");
// })
// .post( (req, res) => {});

// server
// .route('/api/users/:id')
// .get( (req, res) => {})
// .put( (req, res) => {})
// .delete( (req, res) => {});




server.listen(5000, () => console.log('Server running on port 5000'));

