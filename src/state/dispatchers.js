import actionTypes from './actions';

export const getImagesDispatcher = images => ({ type: actionTypes.getImages, images });

export default { getImagesDispatcher };
