/* global require, process */

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");


/* =========================================
   ENVIRONMENT CONFIGURATION
========================================= */

dotenv.config();


/* =========================================
   EXPRESS APP
========================================= */

const app = express();

const PORT = process.env.PORT || 5000;


/* =========================================
   DATABASE CONNECTION
========================================= */

connectDB();


/* =========================================
   MIDDLEWARE
========================================= */

// Allow frontend requests
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://kai-sed-portfolio.vercel.app/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Allow JSON data
app.use(express.json());


/* =========================================
   API ROUTES
========================================= */

// Contact API
app.use("/api/contact", contactRoutes);


/* =========================================
   TEST ROUTE
========================================= */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "KaiSed Portfolio Backend is running successfully 🚀",
  });
});


/* =========================================
   HEALTH CHECK ROUTE
========================================= */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "OK",
    server: "KaiSed Portfolio Backend",
    database: "MongoDB connected",
  });
});


/* =========================================
   404 ROUTE
========================================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  });
});


/* =========================================
   START SERVER
========================================= */

app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 KaiSed Portfolio Backend");
  console.log(`🌐 Server running on port ${PORT}`);
  console.log(`🔗 http://localhost:${PORT}`);
  console.log("=================================");
});