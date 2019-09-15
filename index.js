'use strict';

const app = require('./app');
const db = require('./database');


app.listen(app.get('port'), function(){
    console.log(`server on port ${app.get('port')}`);
});

