const { Router } = require('express');
const router = Router();
const { getAll, createUser, authUser } = require('../controllers/users.controller');
const { validateToken } = require('../middleware/validateToken');

router.get('/v1/users', validateToken, getAll);
router.post('/v1/users', createUser);
router.post('/v1/users/login', authUser);


module.exports = router;