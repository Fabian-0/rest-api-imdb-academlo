const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');

const fs = require('fs');
const path = require('path');
const mimetypes = require('mime-types');

const app = require('./server');
const actorsRoutes = require('./routes/actors.routes');
const directorsRoutes = require('./routes/directors.routes');
const usersRoutes = require('./routes/users.routes');
const helmet = require('helmet');

const multer = require('multer');
const storage = multer.diskStorage ({ 
  destination: (req, file, cb) => {
    console.log(file);
    if(file.fieldname === 'actors') {
      cb(null, path.join('./src','uploads', 'actors'));
    } else {
      cb(null, path.join('./src','uploads', 'directors'));
    }
  },
  filename: (req, file, cb) => {
    console.log(file);
    const ext = mimetypes.extension(file.mimetype);
    cb(null , `${file.fieldname}${Date.now()}.${ext}`);
  }
});
// const actorsPath = path.join('src', 'uploads', 'actors');
const upload = multer({storage});

// Middlewares
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(helmet());
app.use(cors())
app.use(logger('combined', {stream: fs.createWriteStream(path.join('logs','errors.log') ,{flags: 'a'})}));
app.use(express.json());
app.use('/api/v1/',actorsRoutes);
app.use('/api/v1/',directorsRoutes);
app.use(usersRoutes);

app.post('/v1/actors/:id/profile', upload.single('actors'), (req, res) => {
  console.log(req.params);
  res.send('test');
});
app.post('/v1/directors/:id/profile', upload.single('directors'), (req, res) => {
  console.log(req.params);
  res.send('test');
});

app.use(( err, req, res, next) => {
  res.status(500);
  res.json({
    error: 'Something broke!'
  });
});

module.exports = app;