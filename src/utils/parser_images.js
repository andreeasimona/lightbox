/**
 * Get the previous or next id
 * @param {function} images - images array
 * @param {function} selectedId - the current image id
 * @param {bool} isNext - tells if the user wants the next or previous images
 * @return {string} the id of the next of previous image
 */
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

/**
 * Removes duplicates from an array, if a propriery exists in the base array
 * @param {array} array - The base array
 * @param {array} arrayToInsert - The array from which duplicatesd will be removed
 * @param {string} prop - The propriery
 * @return {array} the array with no duplicates
 */
export const removeDuplicates = (array, arrayToInsert, prop) => arrayToInsert
  .filter(obj => array.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === -1);
