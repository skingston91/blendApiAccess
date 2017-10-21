import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from './reducers';
import App from './containers/App';
import api from './api/api';
import '../style/style.less';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunk.withExtraArgument({ api })
)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('.container')
);
