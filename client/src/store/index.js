import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import reducers from '../reducers/index';



const middleware = [thunk];

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
