import { combineReducers } from 'redux';
import starWarsReducer from './starWarsReducer';
import starwarsItemReducer from './starwarsItemReducer';

const rootReducer = combineReducers({
    starItem : starwarsItemReducer,
    starwars : starWarsReducer
});

export default rootReducer;