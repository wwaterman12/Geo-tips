const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

router.post('/', noteController.create);
router.delete('/:id', noteController.delete);

module.exports = router;
