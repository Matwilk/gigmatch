const cors = require('cors');

const express = require('express'),
  routes = require('./api/routes/gigRoutes'),
  app = express(),
  { PORT = 3001 } = process.env,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

// const { CORS_WHITELIST_URL = 'http://localhost:3000' } = process.env;
// const whitelist = Array(CORS_WHITELIST_URL);
// const origin = (origin, callback) =>
//   whitelist.indexOf(origin) !== -1
//     ? callback(null, true)
//     : callback(new Error(`Origin: ${origin} Not allowed by CORS`));
// const corsOptions = {
//   origin,
//   optionsSuccessStatus: 200
// };

// console.log(origin);

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:pass123@ds149732.mlab.com:49732/gigmatch');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route

app.listen(PORT);

/* eslint-disable no-console */
console.log('todo list RESTful API server started on: ' + PORT);
/* eslint-enable no-console */
