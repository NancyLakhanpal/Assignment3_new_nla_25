const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

// var route=express.Router();
const inventoryRoute = require('./RoutesNla25/InventoryRouteNla25/inventoryRouteNla25');
const cartRoute = require('./RoutesNla25/CartRouteNla25/cartRouteNla25');

const corsOptions = {
    origin: '*'
}

app.use(cors());
app.use(bodyParser.json())

app.use('/inventoryNla25',cors(corsOptions),inventoryRoute );
app.use('/cartNla25',cors(corsOptions), cartRoute )

app.listen(port, () =>{
    console.log(`Inventory app listening on Port ${port}`);
})
