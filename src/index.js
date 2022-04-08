import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.scss';

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);