import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './reducers/authReducer';
import {booksReducer} from './reducers/booksReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    books: booksReducer,
    });
    const store = createStore(rootReducer, applyMiddleware(thunk));
    export default store;