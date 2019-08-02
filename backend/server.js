const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

require('./db/db');

app.use(morgan('short'));
app.use(bodyParser.json());

const whitelist = ["http://localhost:9000", "http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


const shareholderController = require('./controllers/ShareholderController');
const companyController = require('./controllers/CompanyController');
app.use('/shareholders', shareholderController);
app.use('/', companyController);



const port = 9000;
app.listen(port, ()=>{
    console.log("back-end server working")
})