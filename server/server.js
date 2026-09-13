/* global require, process */

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


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
   MIDDLEWARE
========================================= */

// Allow requests from the frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Allow JSON data in requests
app.use(express.json());


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