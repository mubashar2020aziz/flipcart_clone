import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';

import connection from './database/db.js';
import DefaultData from './default.js';
import User from './models/userSchema.js';
import product from './models/productSchema.js';
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//route
import router from './router/router.js';
app.use('/api/user', router);

const port = process.env.PORT || 8000;
connection();
User();
product();
app.listen(port, (req, res) => {
  console.log('start server successfully :' + port);
});

DefaultData();
