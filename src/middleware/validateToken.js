const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
  const token = req.headers['acces-token'];
  if(token) {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if(err) {
        res.status(404);
        res.json(err);
      } else {
        res.status(200);
        res.json({decoded});
        console.log(decoded);
        next();
      }
    });
  } else {
    res.status(404);
    res.json({'error': 'without token'});
  }
};

module.exports = {
  validateToken
}