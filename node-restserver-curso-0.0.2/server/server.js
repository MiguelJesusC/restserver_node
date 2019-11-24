require('./config/config');
const express = require('express');
const app = express();
app.use(require('./routes/usuario'))
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//conection to moongo 

mongoose.connect(URLDB,{ useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology: true }, (err, res) => {
    

    if( err ) throw err;

    console.log('¡BD cuando llega el momento!')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});