/**
 * 
 * @desc Redux reducer
 */

import * as types from './../actions/actions';

/**
 * @desc Initial state / default state value
 */
const initialState = {
    getProductData:[] 
};

function reducer(state = initialState,action){
    switch(action.type){
        //set state data to initial state and return to action
        case types.GET_PRODUCT_LIST:
            return Object.assign({}, state, {
                getProductData: action.getProductData
            });
        
        default:
            return state;
    }
}

export default reducer;
