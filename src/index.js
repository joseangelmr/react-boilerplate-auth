import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './containers';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/store'

import './index.css'

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);
