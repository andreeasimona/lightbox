import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import './styles/index.css';
import Gallery from './Gallery';

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>, document.getElementById('root'),
);
