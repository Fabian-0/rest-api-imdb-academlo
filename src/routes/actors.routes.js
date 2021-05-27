const { Router } = require('express');
const router = Router();
const { validateToken } = require('../middleware/validateToken');

const path = require('path');
const { getAll, 
        createActor, 
        updateActor, 
        deleteActor, 
        updateImage 
      } = require('../controllers/actors.controller');


router.get('/actors', validateToken, getAll);  
router.post('/actors', validateToken, createActor);
router.put('/actors/:id', validateToken, updateActor);
router.delete('/actors/:id', validateToken, deleteActor);
// router.posts('/actors/:id/profile', upload.single('profile'),updateImage);

module.exports = router;