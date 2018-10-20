
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, { images: [], page: 1 });

export default store;
