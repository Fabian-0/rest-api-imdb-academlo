const { Router } = require('express');
const router = Router();

const { validateToken } = require('../middleware/validateToken');

const { getAll, createDirector, updateDirector, deleteDirector } = require('../controllers/directors.controller');

router.get('/directors', validateToken, getAll);
router.post('/directors', validateToken, createDirector);
router.put('/directors/:id', validateToken, updateDirector);
router.delete('/directors/:id', validateToken, deleteDirector);

module.exports = router;