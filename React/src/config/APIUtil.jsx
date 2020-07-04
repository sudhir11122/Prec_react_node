/**
 * @desc Class with functions with post, put, get, delete method api call
 */
import Axios from "axios";

class APIUtil {
    getMethod(url) {
        var headersSet = {
            "Accept": "application/json",
            "Content-Type": "application/json",           
        };

        return Axios({
            method: 'get',
            url: url,
            headers: headersSet
        }).then(response => response)
        .catch(error =>{ 
            if (error.response) {
                return error.response
            } 
            else {
                return {"status":"404"}
            }
        });

    }

}
export default (new APIUtil);