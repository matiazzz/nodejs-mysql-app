const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// midlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
const postickRoute = require('./routes/postick');
app.use(postickRoute);

app.listen(app.get('port'), () => {
  console.log('Listening on http://localhost:3000/')
});
