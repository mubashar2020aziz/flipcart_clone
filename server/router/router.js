import express from 'express';
const router = express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
    const userRegister = await user.save();
    if (userRegister) {
      res.status(200).json({
        status: true,
        message: 'user register successfully',
      });
    } else {
      res.status(502).json({
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
    //hashing password
    // const Salt = bcrypt.genSaltSync(10);
    // const hashedPassword = bcrypt.hashSync(req.body.password, Salt)

    const userLogin = await User.findOne({
      email: email,
      password: password,
    });
    if (userLogin) {
      return res.status(200).json({
        data: userLogin,
        status: true,
        message: 'user login exist',
      });
    } else {
      return res.status(402).json({
        status: false,
        message: 'login not exist',
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: 'database error',
    });
  }
});
// module.export = router;
export default router;
