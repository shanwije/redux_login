import { SELECTED, DISSELECTED } from '../actions/constants'

const initialState = {
    selected : false,
    key : null
}

export default function starwarsItemReducer( state = initialState, action){

    switch(action.type){
        case SELECTED :
        console.log("selected ", action);
        return {
            ...state,
            selected : true,
            key : action.key
        }
        case DISSELECTED : 
        console.log("disselected ", action);
        return {
            ...state,
            selected : false,
            key : null
        }
        default:
        return state;
    }
}