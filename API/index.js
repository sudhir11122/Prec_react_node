global.express = require('express');
global.app = express();
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var cors = require('cors');

var mysql = require('mysql');
global.conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root@123',
    database : 'practical'
});
conn.connect();

app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    next();
});

var routes = require('./app');

var http = require('http').Server(app);

http.listen('3001',function(){
    console.log("Listing to port 3001");
}).on('error', function(err) {
    console.log("err",err)
});