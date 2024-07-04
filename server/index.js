const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const protectedRoute = require("./routes/protectedRoute");

const app = express();
require("dotenv").config();

app.use(cors());

// using an middleware
app.use(cors(
    {
        origin: ["https://admin-panel-public.vercel.app/","http://localhost:5173/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use(express.json());

app.use("/api/auth", userRoutes);
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
