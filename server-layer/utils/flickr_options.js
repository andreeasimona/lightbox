/* Flickr API call paramethers */
const flickrOptions = {
  method: 'flickr.photos.getRecent',
  api_key: '125189ddfa7a0e66bfe3d9339832ba23',
  format: 'json',
  nojsoncallback: 1,
  per_page: 100,
  extras: ['owner_name', 'date_upload', 'description'],
};

module.exports = { flickrOptions };
