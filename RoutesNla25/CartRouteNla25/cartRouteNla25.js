const {Route} = require('express');
const express = require('express');

var routes = express.Router();

var cartController = require('../../ControllersNla25/CartControllerNla25/cartControllerNla25');

routes.get('/',cartController.getCartNla25);
routes.post('/',cartController.addItemNla25);
routes.delete('/',cartController.removeItemNla25);
routes.post('/checkout',cartController.checkout);

module.exports = routes;