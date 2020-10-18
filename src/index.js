import React from 'react';
import ReactDOM from 'react-dom';

import reducer, { initialState } from './context/reducer';
import {Data} from './context/data';

import App from './App';

ReactDOM.render(
  <Data initialState={initialState} reducer={reducer}>
    <App />
  </Data>,
  document.getElementById('root'));
