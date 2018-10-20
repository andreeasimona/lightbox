const express = require('express');
const getImages = require('../controllers/controller');

const router = express.Router();

router.route('/images/:page').get(getImages);

module.exports = router;
