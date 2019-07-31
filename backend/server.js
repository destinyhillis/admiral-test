const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config()

require('./db/db');

app.use(morgan('short'));
app.use(bodyParser.json());

const shareholderController = require('./controllers/ShareholderController');
app.use('/', shareholderController);




const port = process.env.PORT || 9000;
app.listen(port, ()=>{
    console.log("back-end server working")
})