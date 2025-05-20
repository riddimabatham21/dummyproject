const { isValidObjectId } = require("mongoose");
const { exists } = require("../models/user");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const Users = require("./../models/user");

const bcrypt = require("bcrypt");
router.post("/signup", async (req, res) => {
  try {
    let email = req.body.email;
    let pass = req.body.password;

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;

    console.log(email, pass);

    //if the user already exists
    const user = await Users.findOne({ email: email });

    if (user) {
      return res.status(401).send({
        message: "User already exist",
        success: false,
      });
    }

    const hashpassword = await bcrypt.hash(pass, 10);
    password = hashpassword;

    const newUser = new Users({
      firstname,
      email,
      password,
      lastname,
    });

    await newUser.save();

    res.status(200).json({
      message: "Signup successful",
      success: true,
      user: { id: newUser._id, email: newUser.email },
    });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: e.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    let email = req.body.email;
    let pass = req.body.password;

    //Check if User exist
    const user = await Users.findOne({ email: email });
    console.log(user, "user", pass);
    if (!user) {
      res.send({
        message: "User not exist",
        success: false,
      });
    }

    //check iF PASSWORD IS CORRECT
    const isvALISD = await bcrypt.compare(pass, user.password); //retunr promise

    if (!isvALISD) {
      res.send({
        message: "pASSWORD NOT MATCH",
        success: false,
      });
    }

    //IF THE USER EXIST & PASSWORD IS CORRECT ,ASSIGN A JWT
    const token = jwt.sign({ userId: user._id }, process.env.Seckret_key, {
      expiresIn: "1d",
    });
    res.send({
      message: "User-LoggedIn successfully",
      success: true,
      token: token,
    });
  } catch (e) {
    res.send({
      message: e.message,
      success: false,
    });
  }
});

module.exports = router;
