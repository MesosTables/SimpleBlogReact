import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//router will decide what to show on the screen
//browserHistory tells react-router how to interpret changes to the URL
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';

//defined in routes.js
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes= {routes}/>
  </Provider>
  , document.querySelector('.container'));
