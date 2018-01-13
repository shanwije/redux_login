import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../actions/constants'
const initialState = {
    data : [],
    dataFetched : false,
    isFetching : false,
    error : false
}

export default function starWarsReducer( state = initialState, action){
    switch(action.type){
        case FETCHING_DATA : 
            console.log("fetching in action");
            return{
                ...state,
                data: [],
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS:
            console.log("fetchED DATA");
            return{
                ...state,
                isFetching : false,
                data : action.data
            }
        case FETCHING_DATA_FAILURE:
        console.log("error from action");
            return{
                ...state,
                isFetching : false,
                error : true
            }
        default : 
            return state;
    }
}