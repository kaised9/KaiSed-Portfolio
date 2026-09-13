import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={21} />,
      link: "#",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={21} />,
      link: "#",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={21} />,
      link: "#",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={21} />,
      link: "#",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane size={21} />,
      link: "#",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={21} />,
      link: "#",
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="contact-container">

        {/* SECTION HEADER */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-label">
            <Sparkles size={16} />
            <span>LET'S CONNECT</span>
          </div>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            Have an idea, opportunity, or question? Feel free to reach out
            through any platform or send me a message directly.
          </p>
        </motion.div>


        {/* CONTACT HUB */}
        <motion.div
          className="contact-hub"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* CENTRAL CORE */}
          <div className="contact-core">

            <div className="contact-core-icon">
              <Mail size={32} />
            </div>

            <h3>Let's Talk</h3>

            <p>
              I'm always open to new ideas,
              collaborations, and opportunities.
            </p>

          </div>


          {/* EMAIL */}
          <a
            href="mailto:your@email.com"
            className="contact-node node-email"
            aria-label="Email"
          >
            <Mail size={21} />
            <span>Email</span>
          </a>


          {/* PHONE */}
          <a
            href="tel:+8800000000000"
            className="contact-node node-phone"
            aria-label="Phone"
          >
            <Phone size={21} />
            <span>Phone</span>
          </a>


          {/* WHATSAPP */}
          <a
            href="https://wa.me/8800000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-node node-whatsapp"
            aria-label="WhatsApp"
          >
            <MessageCircle size={21} />
            <span>WhatsApp</span>
          </a>


          {/* SOCIAL ICONS */}
          <div className="contact-social-nodes">

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="social-node"
              >
                {social.icon}
              </a>
            ))}

          </div>

        </motion.div>


        {/* MESSAGE FORM */}
        <motion.div
          className="contact-message-area"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="message-area-title">

            <span className="message-line"></span>

            <h3>Send a Message</h3>

            <span className="message-line"></span>

          </div>


          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">
                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>


              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>


            <div className="form-group">

              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                required
              />

            </div>


            <div className="form-group">

              <label>Your Message</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-send-button"
            >
              <Send size={19} />

              <span>Send Message</span>
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;