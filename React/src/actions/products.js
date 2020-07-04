
import * as types from './actions';
import APIUtil from '../config/APIUtil';
import UrlConstants from '../config/UrlConstants';




/**
 * 
 * @desc action get Todo List - api call for get Todo list
 * @param object data - get Todo details object
 */
export function actionGetProductList(id) {
    let url = UrlConstants.getProductlist;
    return function (dispatch) {
        return APIUtil.getMethod(url,true).then(response => {
            if (response.status === 200) {
                dispatch({
                    type: types.GET_PRODUCT_LIST,  
                    getProductData : response.data
                });            
            }
            else {
                dispatch({
                    type: types.GET_PRODUCT_LIST,  
                    getProductData : null
                });   
            }
        });       
    }
}




