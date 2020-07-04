var productsActions = require('./product');

// To Do Actions
app.get('/getProductlist/',productsActions.list);