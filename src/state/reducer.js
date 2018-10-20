import actionTypes from './actions';
import { removeDuplicates } from '../utils/parser_images';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.getImages: {
      const images = [...state.images, ...removeDuplicates(state.images, action.images, 'id')];
      return { ...state, images, page: state.page + 1 };
    }
    default:
      return state;
  }
};
export default reducer;
