const express = require('express');
const getImages = require('../controllers/controller');

const router = express.Router();

/* Get images Rest API point */
router.route('/images/:page').get(getImages);

module.exports = router;
