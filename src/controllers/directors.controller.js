const { Directors } = require('../models');

function getAll(req, res, next) {
  Directors.findAll({raw: true})
    .then(response => {
      console.log(response);
      res.status(200);
      res.json({
        error: '',
        directors: response
      });
    })
    .catch(err => next(err));
  return;
}

function createDirector(req, res, next) {
  const { first_name, last_name, dob, biography, profile_photo, active } = req.body;
  Directors.create({ first_name, last_name, dob, biography, profile_photo, active })
    .then(response => {
      console.log(response);
      res.status(201);
      res.json({
        error: '',
        message: 'Created'
      });
    })
    .catch(err => next(err));
  return;
};

function updateDirector(req, res, next) {
  const { id } = req.params;
  console.log(id);
  const data = req.body;
  const dataUpdate = {};
  (data.first_name) ? dataUpdate.first_name = data.first_name : false;
  (data.last_name) ? dataUpdate.last_name = data.last_name : false;
  (data.dob) ? dataUpdate.dob = data.dob : false;
  (data.biography) ? dataUpdate.biography = data.biography : false;
  (data.profile_photo) ? dataUpdate.profile_photo = data.profile_photo : false;
  (data.active !== null) ? dataUpdate.active = data.active : false;
  Directors.update(dataUpdate, { where: { id } })
    .then(response => {
      console.log(response);
      let resMessage = null;
      let status = null;
      if(response[0]) {
        status = 200;
        resMessage = 'Updated';
      } else {
        status = 400;
        resMessage = 'An expected error'
      }
      res.status(status);
      res.json({
        error: '',
        message: resMessage
      });
    })
    .catch(err => next(err));
  return;
};

function deleteDirector(req, res, next) {
  const { id } = req.params;
  console.log(id);
  Directors.destroy({ where: { id } })
    .then(response => {
      console.log(response);
      let resMessage = null;
      let status = null;
      if(response) {
        status = 200;
        resMessage = 'Deleted';
      } else {
        status = 400;
        resMessage = 'An expected error'
      }
      res.status(status);
      res.json({
        error: '',
        message: resMessage
      });
    })
    .catch(err => next(err));
  return;
};

module.exports = {
  getAll,
  createDirector,
  updateDirector,
  deleteDirector
};