import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import express from 'express';
const app = express();

import connection from './database/db.js';
import DefaultData from './default.js';

const port = process.env.PORT || 8000;
connection();
app.listen(port, (req, res) => {
  console.log('start server successfully :' + port);
});

DefaultData();
