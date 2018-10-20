import actionTypes from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.getImages:
      return { ...state, images: action.images };
    default:
      return state;
  }
};
export default reducer;
