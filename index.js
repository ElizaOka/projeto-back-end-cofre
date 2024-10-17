const express = require('express');
const cors = require('cors');

const routesSonho = require('./route/routesSonho');
const routesCategoria = require('./route/routesCategoria');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routesSonho);
app.use('/', routesCategoria);

app.listen(5000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:5173/');
});