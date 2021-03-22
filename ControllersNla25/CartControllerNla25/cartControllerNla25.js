let cart = [];
const inventory = require("../../data/inventory.json");

exports.getCartNla25 = function(req, res) {
    res.header("Content-Type: application/json");
    res.send(cart);
}

function checkSKU(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal.sku;
    });
}

exports.addItemNla25 = function(req, res, next) 
{
    console.log("found: "+checkSKU(cart, req.body.sku));
    if(checkSKU(cart, req.body.sku))
    {
        cart.forEach((item, key) => {
            if(item.sku===req.body.sku)
            {
                item.sku=req.body.sku;
                item.quantity= item.quantity+1;
                item.price=(parseFloat(item.price) + parseFloat(req.body.price)).toFixed(2);
            }
        })
    }
    else {
        const item = {sku: req.body.sku, name: req.body.name, quantity: req.body.quantity, price: req.body.price};
        cart.push(item);
    }
    res.header("Content-Type: application/json");
    res.send(JSON.stringify(cart));
}

exports.removeItemNla25 = function(req, res)
{
    cart = cart.filter((item) => item.sku != req.body.sku);
    res.header("Content-Type: application/json");
    res.send(JSON.stringify(cart));
}

exports.checkout = function(req, res)
{
    inventory.forEach(item => {
        req.body.cart.forEach(cartItem => {
            if(item.sku === cartItem.sku)
            {
                item.quantity = item.quantity-cartItem.quantity;
            }
        })
    });
    cart = [];
    res.header("Content-Type: application/json");
    const message = {message: "Checkout done successfully"};
    res.send(JSON.stringify(message));
}