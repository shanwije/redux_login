import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import app from './src/reducers';


export default () =>{
    let store = createStore(app, applyMiddleware(thunk));
    return store;
}