const https = require("https");
const {URL, URLSearchParams} = require("url");
const API_URL = "https://api.flickr.com/services/rest/";
const {flickrOptions} = require('../utils/flickr_options');
const parserImages = require('../utils/parser_images');

const CALL_URL = new URL(API_URL);
CALL_URL.search = new URLSearchParams(flickrOptions);

const getImages = (req, res) => {
	https
		.get(CALL_URL.href, function (response) {
			// Continuously update stream with data
			let data = "";
			response.on("data", function (d) {
				data += d;
			});
			response.on("end", function () {
				// Data reception is done, do whatever with it!
        const parsed = JSON.parse(data);
        const images = parserImages(parsed.photos.photo);
        res.json({ success: true, images });
			});
		})
		.on("error", e => {
			console.error(`Got error: ${e.message}`);
		});
};

module.exports = getImages;
