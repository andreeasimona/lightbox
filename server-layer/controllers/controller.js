const https = require('https');
const { URL, URLSearchParams } = require('url');

const API_URL = 'https://api.flickr.com/services/rest/';
const { flickrOptions } = require('../utils/flickr_options');
const parserImages = require('../utils/parser_images');

const CALL_URL = new URL(API_URL);

const getImages = (req, res) => {
  const { page } = req.params.page;
  CALL_URL.search = new URLSearchParams({ ...flickrOptions, page });
  https
    .get(CALL_URL.href, (response) => {
      // Continuously update stream with data
      let data = '';
      response.on('data', (d) => {
        data += d;
      });
      response.on('end', () => {
        const images = parserImages(JSON.parse(data).photos.photo);
        res.json({ success: true, images });
      });
    })
    .on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });
};

module.exports = getImages;
