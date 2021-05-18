const { Users } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


function getAll(req, res, next) {
  Users.findAll({ raw: true })
    .then(response => {
      
      res.status(200);
      console.log(response);
      res.json({users: response});
    })
    .catch(err => next(err));
  return;
};
  
function createUser(req, res, next) {
  const { first_name, last_name, email, password, reset_token, active } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) =>{
      Users.create({ first_name, last_name, email, password: hash, reset_token, active })
        .then(response => {
          res.status(200);
          res.json({users: response});
        })
        .catch(err => next(err));
    });
  });
  // console.log(req.body);
  return;
};

function authUser(req, res, next) {
  const {email, password} = req.body;
  console.log(email, password);
  Users.findAll({ raw: true, where: {email}})
    .then(response => {
      console.log(response.length);
      if(response.length){
        bcrypt.compare(password, response[0].password)
          .then((resCompare) => {
            jwt.sign(response[0], process.env.JWT_KEY, {algorithm: 'HS512', expiresIn: '1h'}, (err, token) =>{
              res.status(200);
              res.json({token});
              console.log(token);
            });
          })
          .catch(err => {
            console.log(err);
            res.status(404);
            res.json({error: 'user or password'});
          });
      } else {
        console.log(response);
        res.status(404);
        res.json({error: 'user or password'});
      }
      return;
    })
    .catch(err => next(err));
  return;
};

module.exports = {
  getAll,
  createUser,
  authUser
}