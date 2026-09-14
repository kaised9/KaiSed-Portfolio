/* global require, module */

const express = require("express");

const {
  createContactMessage,
} = require("../controllers/contactController");


/* =========================================
   ROUTER
========================================= */

const router = express.Router();


/* =========================================
   CONTACT ROUTES
========================================= */

// POST /api/contact
router.post("/", createContactMessage);


/* =========================================
   EXPORT ROUTER
========================================= */

module.exports = router;