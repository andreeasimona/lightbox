const parseImages = images => images.map((item) => {
  const {
    server, id, secret, farm,
  } = item;
  return { ...item, src: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg` };
});
module.exports = parseImages;
