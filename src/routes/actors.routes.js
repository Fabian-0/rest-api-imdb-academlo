const { Router } = require('express');
const router = Router();
const path = require('path');
const { getAll, 
        createActor, 
        updateActor, 
        deleteActor, 
        updateImage 
      } = require('../controllers/actors.controller');


router.get('/actors', getAll);  
router.post('/actors', createActor);
router.put('/actors/:id', updateActor);
router.delete('/actors/:id', deleteActor);
// router.posts('/actors/:id/profile', upload.single('profile'),updateImage);

module.exports = router;