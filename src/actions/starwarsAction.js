import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants';

var url = 'https://swapi.co/api/people';

export function getData(){
    return {
        type : FETCHING_DATA
    }
}

export function getDataSuccess(data){
    return{
        type : FETCHING_DATA_SUCCESS,
        data
    }
}

export function getDataFailure(){
    return{
        type : FETCHING_DATA_FAILURE
    }
}

export function fetchData(){
    console.log("CCCCCCCCCCCCCCCCCCC");
    return (dispatch) => {
        console.log("dispatching...");
        dispatch(getData());
        fetch(url)
        .then(res => res.json())
        .then(json => dispatch(getDataSuccess(json.results)))
        .catch(err => dispatch(getDataFailure(err)))
    }
}