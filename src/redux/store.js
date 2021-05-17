import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'redux/reducers/rootReducer';

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
