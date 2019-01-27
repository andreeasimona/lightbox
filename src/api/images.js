const urlUsers = 'http://localhost:8142/api/images';

/*const getImages = (cb, page) => (
  fetch(`${urlUsers}/${page}`)
    .then(res => (res.json()))
    .then(response => (cb(response)))
    .catch(error => (cb(error)))
);*/

const getImages = async function (cb, page) {
	try {
		let response = await fetch(`${urlUsers}/${page}`);
		let parsedResponse = await response.json();
		
		cb(parsedResponse);
	} catch (err) {
		cb(err);
	}
};

export default getImages;
