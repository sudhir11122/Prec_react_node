    /**
     * @desc this file contains all actions related todos 
     */
    var product = {}
    /**
     * @desc get product list or product details
     * if id passed in get param then get product details of that id
     */
    product.list = (req, res) => {
        let sql = "SELECT id, qtyPerUnit, ProductName, qtyPerUnit,unitPrice,unitInStock,description FROM products WHERE isDelete='0'"
        conn.query(sql,function(err, rows, fields) {	
			if (err) {		
                console.log("err",err)		
				res.status(500).send({message : "Something went wrong!"})
			} else {
                res.send(rows)
			}
		});
    };

    
module.exports = product