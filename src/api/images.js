const urlUsers = 'http://localhost:8142/api/images';

const getImages = cb => (
  fetch(urlUsers)
    .then(res => (res.json()))
    .then(response => (cb(response)))
    .catch(error => (cb(error)))
);

export default getImages;
