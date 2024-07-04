const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const protectedRoute = require("./routes/protectedRoute");
const { getUsers } = require("./controllers/userController");

const app = express();
require("dotenv").config();

const allowedOrigins = ['http://localhost:5173', "https://admin-panel-public.vercel.app/"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, origin);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable sending of cookies and other credentials
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(express.json());

// Enable preflight for all routes
app.options('*', cors(corsOptions));


app.use("/api/auth", userRoutes);
app.use("/get", getUsers);
app.use("/protected", protectedRoute);

app.get("/", (req, res) => {
  res.send("Hello guys");
});

const server = app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
