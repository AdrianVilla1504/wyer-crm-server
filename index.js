require('dotenv').config();

const express = require('express');
const connectDB = require('./config/database');

const configExpress = require('./config/express')

const routes = require('./routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, async () => {
  configExpress(app);

  await connectDB();

  routes(app);

  console.log(`This server is running on http://localhost:${PORT}`);
} )
