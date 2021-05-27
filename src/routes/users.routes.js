const { Router } = require('express');
const router = Router();
const { getAll, createUser, authUser, updateUser, deleteUser } = require('../controllers/users.controller');
const { validateToken } = require('../middleware/validateToken');

router.get('/users', validateToken, getAll);
router.post('/users', validateToken, createUser);
router.put('/users/:id', validateToken, updateUser);
router.delete('/users/:id', validateToken, deleteUser);

router.post('/login', authUser);
router.post('/register', validateToken, createUser);

module.exports = router;