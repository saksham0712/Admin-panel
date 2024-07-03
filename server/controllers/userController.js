const User = require("../models/userModel"); 
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken"); 

// Signup function to register a new user
module.exports.signup = async (req, res, next) => {
  try {
    // Extract user details from the request body
    const { firstName, lastName, email, password, role } = req.body;

    // Check if the email already exists in the database
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "User already exists", status: false });

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role
    });

    // Remove the password field from the user object before sending it to the client
    delete user.password;

    // Send a success response with the user details and the token
    return res.json({ msg: "Account created successfully", status: true, user, token });
  } catch (error) {
    // Handle any errors that occur
    return next(error);
  }
};

// Login function to authenticate a user
module.exports.login = async (req, res, next) => {
  try {
    // Extract email and password from the request body
    const { email, password} = req.body;

    // Find the user in the database by email
    const user = await User.findOne({ email });
    if (!user) return res.json({ msg: "Incorrect username or password", status: false });

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect username or password", status: false });

    // Remove the password field from the user object before sending it to the client
    delete user.password;

    // Generate a JWT token for the authenticated user

       const token = jwt.sign(
          { userId: user._id },process.env.secret,{ expiresIn: "80123" } 
        );
        res.cookie('token', token, { httpOnly: true })
        
        
        if(user.role === 'admin' ) // this will match the user from db if it is admin or not
        res.json({ msg: "Welcome, Admin", status: true, user, role:'admin'});
        
        // Send a success response with the user details and the token
        res.json({ msg: "Welcome, you are logged in", status: true, user, });
  } catch (error) {
    // Handle any errors that occur
    return next(error);
  }
};
