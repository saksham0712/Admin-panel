const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "User already exists", status: false });


    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    delete user.password;

    // genrate web token
    const token = jwt.sign(
        { email: user.email },process.env.secret,{expiresIn: "1d",}
    )
    return res.json({ msg:"Account created successfully", status: true, user, token });
    // res.cookie("uid",token)
  } catch (error) {
    return next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ msg: "Incorrect username or password", status: false });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid)
    return res.json({ msg: "Incorrect username or password", status: false });
    delete user.password;

     // Generate JWT token
     const token = jwt.sign(
        { email: user.email },process.env.secret,{expiresIn: "1d",}
      ); 
      
      res.json({status: true, user, token})
} 
  catch (error) {
    return next(error);
  }
};
