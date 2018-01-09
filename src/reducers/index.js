import { combineReducers } from 'redux';
import starWarsReducer from './starWarsReducer';

const rootReducer = combineReducers({
    starwars : starWarsReducer
});

export default rootReducer;