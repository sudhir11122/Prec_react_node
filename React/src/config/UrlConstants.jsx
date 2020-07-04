/**
 * 
 * @desc URL Constant class with all APIs urls declaration
 */

class UrlConstants {
	constructor() {
		
		this.SiteUrl = "http://localhost:3000/"
		this.BaseUrl = "http://localhost:3001/";
		this.getProductlist = this.BaseUrl + 'getProductlist';
	}
}

export default new UrlConstants();
