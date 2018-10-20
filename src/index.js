import 'react-app-polyfill/ie9';
import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import './styles/index.css';
import Gallery from './components/Gallery';

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>, document.getElementById('root'),
);
