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
  const { first_name, last_name, email, password, dob, active, profile_photo } = req.body;
    bcrypt.hash(password, 8, (err, hash) =>{
      Users.create({ first_name, last_name, email, password: hash, active, dob, profile_photo })
        .then(response => {
          res.status(200);
          res.json({users: response});
        }) 
        .catch(err => next(err));
    });
  return;
};

function updateUser(req, res, next) {
  const { first_name, last_name, email, password, active } = req.body;
  const id = req.params.id;
  console.log(req.body, req.params);

  bcrypt.hash(password, 8, (err, hash) =>{
      Users.update({ first_name, last_name, email, password: hash, active }, {where: {id}})
        .then(response => {
          console.log(response);
          res.status(200);
          res.json({users: response});
        }) 
        .catch(err => next(err));
    });
  return;
};

function deleteUser(req, res, next) {
  const id = req.params.id;
  console.log(id);
  Users.destroy({ where: { id } })
    .then(reponse => {
      res.status(200);
      res.json({message: 'User Deleted'});
    })
    .catch(err => {
      console.error(err);
      res.status(404);
      res.json({err});
    })
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
            if(!resCompare) throw 'user or password';
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
  updateUser,
  deleteUser,
  authUser
}