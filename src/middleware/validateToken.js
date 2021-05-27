const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
  let token = req.headers['authorization'];
  if(token) {
    token = token.replace(/^Bearer\s+/, "");
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {

      if(err) {
        res.status(404);
        res.json({error: err})
        next(err);
      } else {
        req.decoded = decoded;
        next()
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