const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const app = express();

// add bodyParder midddleware to app
app.use(bodyParser.json());

// DB config 
const { mongoURI } = require('./config/keys');

// connect to mongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('MongoDB connected!')
  })
  .catch(err => console.log(err));

// User routes 
app.use('/api/items', items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));
