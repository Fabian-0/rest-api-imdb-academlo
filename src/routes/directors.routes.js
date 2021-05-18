const { Router } = require('express');
const router = Router();
const { getAll, createDirector, updateDirector, deleteDirector } = require('../controllers/directors.controller');

router.get('/directors', getAll);
router.post('/directors', createDirector);
router.put('/directors/:id', updateDirector);
router.delete('/directors/:id', deleteDirector);

module.exports = router;