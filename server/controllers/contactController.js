/* global require, module */

const Contact = require("../models/Contact");


/* =========================================
   CREATE CONTACT MESSAGE
========================================= */

const createContactMessage = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;


    /* =========================================
       VALIDATION
    ========================================= */

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }


    /* =========================================
       CREATE MESSAGE
    ========================================= */

    const contactMessage = await Contact.create({
      name,
      email,
      subject,
      message,
    });


    /* =========================================
       SUCCESS RESPONSE
    ========================================= */

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
      data: {
        id: contactMessage._id,
        name: contactMessage.name,
        email: contactMessage.email,
        subject: contactMessage.subject,
        createdAt: contactMessage.createdAt,
      },
    });

  } catch (error) {
    console.error("Contact Message Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message.",
    });
  }
};


/* =========================================
   EXPORT CONTROLLER
========================================= */

module.exports = {
  createContactMessage,
};