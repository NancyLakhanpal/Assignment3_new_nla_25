const inventory = require("../../data/inventory.json");

exports.getInventory = function(req, res) {    
    res.header("Content-Type: application/json");
    res.send(inventory);
}