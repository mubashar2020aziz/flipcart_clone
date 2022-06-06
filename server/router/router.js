import express from 'express';
const router = express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import product from '../models/productSchema.js';
import connection from '../database/db.js';
import User from '../models/userSchema.js';
connection();
router.post('/register', async (req, res) => {
  // fill the form
  try {
    const { firstname, lastname, username, email, password, number } = req.body;
    if (
      !firstname ||
      !lastname ||
      !username ||
      !email ||
      !password ||
      !number
    ) {
      res.status(422).json({
        status: false,
        message: 'plz fill the form plz',
      });
    }

    //check user already exist or not and use User
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      res.status(422).json({
        status: false,
        message: 'user already exist',
      });
    }

    // enter new register
    const user = new User({
      firstname,
      lastname,
      username,
      email,
      password,
      number,
    });
    // hash password by bcrypt
    const userRegister = await user.save();
    if (userRegister) {
      return res.status(200).json({
        status: true,
        message: 'user register successfully',
      });
    } else {
      return res.status(502).json({
        status: false,
        message: 'user register fail',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({
        status: false,
        message: 'plz fill the form ',
      });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        return res.status(400).json({
          status: false,
          message: 'user login unsuccessfull',
        });
      } else {
        return res.status(200).json({
          data: userLogin,
          status: true,
          message: 'login  exist',
        });
      }
    } else {
      return res.status(400).json({
        status: false,
        message: 'invalid credentials',
      });
    }
  } catch (err) {
    console.log('database error');
  }
});

//  product fetch

router.get('/products', async (req, res) => {
  try {
    let products = await product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
});
// module.export = router;
export default router;
