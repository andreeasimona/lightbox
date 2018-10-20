const Flickr = require('flickrapi');
const { flickrOptions } = require('../utils/flickr_options');
const parserImages = require('../utils/parser_images');

const getImages = (req, res) => {
  Flickr.tokenOnly(flickrOptions, (error, flickr) => {
    flickr.photos.getRecent({
      page: 1,
      per_page: 10,
    }, (err, result) => {
      const images = parserImages(result.photos.photo);
      res.json({ success: true, images });
    });
  });
};

module.exports = getImages;
