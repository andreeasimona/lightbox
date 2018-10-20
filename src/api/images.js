const urlUsers = 'http://192.168.0.161:8142/api/images';

const getImages = (cb, page) => (
  fetch(`${urlUsers}/${page}`)
    .then(res => (res.json()))
    .then(response => (cb(response)))
    .catch(error => (cb(error)))
);

export default getImages;
