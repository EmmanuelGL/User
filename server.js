const express =  require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
//presenta las peticiones echas en consola
const morgan = require('morgan');
//pedir rutas 
const apiRouter = require('./router/api_v1');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/meandb',{useNewUrlParser: true }) 
.then(() => {
 
    // Cuando se realiza la conexión, lanzamos este mensaje por consola
console.log('La conexión a MongoDB se ha realizado correctamente!!');
})
.catch(err => console.log(err));
// Si no se conecta correctamente escupimos el error


// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/', apiRouter);

// console.log(path.join(__dirname, '/public/dist'))
// static files
// app.use(express.static(__dirname + '/public/dist'));
app.use(express.static(path.join(__dirname, '/public/dist/video')))

// app.all('*', (req, res, next) => {
//     res.sendFile(path.resolve('./public/dist/index.html'))
// });

app.listen(3000, () => console.log('server on port 3000'));