export const getImagePrevNextId = (images, selectedId, isNext) => {
	const selectedIdText = images.findIndex(item => item.id === selectedId);

	let selectedPrevNextId = isNext ? selectedIdText + 1 : selectedIdText - 1;
	if (selectedPrevNextId < 0) {
		selectedPrevNextId = images.length - 1;
	}
	if (selectedPrevNextId >= images.length) {
		selectedPrevNextId = 0;
	}
	return images[selectedPrevNextId].id;
};

export const removeDuplicates = (array, arrayToInsert, prop) => {
    return arrayToInsert.filter((obj) => {
        return array.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === -1;
    });
}
