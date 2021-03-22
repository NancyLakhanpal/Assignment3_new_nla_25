const {Route} = require('express');
const express = require('express');

var routes = express.Router();

var inventoryController = require('../../ControllersNla25/InventoryControllerNla25/inventoryControllerNla25');

routes.get('/', inventoryController.getInventory)

module.exports = routes;