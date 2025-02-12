const express = require('express');
const axios = require('axios');
const cors = require('cors');
const config = require('./config.js');
const routes = require('./routes/index.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
