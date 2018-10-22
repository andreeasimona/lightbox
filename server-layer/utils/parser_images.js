const parseImages = images => images.map((item) => {
  const {
    server, id, secret, farm, dateupload,
  } = item;
  return { ...item, src: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`, dateupload: new Date(parseInt(dateupload, 10)).toString() };
});
module.exports = parseImages;
