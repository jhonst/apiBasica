const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.get( '/', (req, res) => {
    res.json(
        [
            {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
            {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
            {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
            {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
            {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
            {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"},
            {"category": "Foods", "price": "$9.99", "stocked": true, "name": "Hot Dog"},
            {"category": "Foods", "price": "$19.99", "stocked": false, "name": "Burger"},
            {"category": "oters", "price": "$30.99", "stocked": true, "name": "Car"}
          ]
    );
} );


app.listen(3030, () => {
    console.log('hola server')
} );