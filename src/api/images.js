const urlUsers = 'http://localhost:8142/api/images';

/* Get the images for the backend api */
const getImages = (cb, page) => (
  fetch(`${urlUsers}/${page}`)
    .then(res => (res.json()))
    .then(response => (cb(response)))
    .catch(error => (cb(error)))
);

export default getImages;
