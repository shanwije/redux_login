import { SELECTED, DISSELECTED } from './constants';


export function selectItem(key){
    return {
        type : SELECTED,
        key
    }
}

export function disSelectItem(key){
    return {
        type : DISSELECTED,
        key
    }
}