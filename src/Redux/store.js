import {createStore,applyMiddleware} from 'redux';
import loader from 'redux-logger'
import rootReducer from './root-reducer';

// const middleware = [loader]

const store = createStore(rootReducer,applyMiddleware(loader));

export default store;