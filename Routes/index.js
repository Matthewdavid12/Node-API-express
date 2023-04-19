const productsrouter = require('./products.router');

function routerApi(app) {
 app.use('/products', productsrouter);
}

module.exports = routerApi;
