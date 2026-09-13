import { motion } from "framer-motion";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* TOP AREA */}

        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* BRAND */}

          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              KaiSed<span>.</span>
            </a>

            <p>
              Building modern digital experiences through technology,
              creativity, and continuous learning.
            </p>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-links">

            <h4>Explore</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>

          </div>


          {/* CONNECT */}

          <div className="footer-connect">

            <h4>Connect</h4>

            <a
              href="mailto:your@email.com"
              className="footer-email"
            >
              <Mail size={18} />

              <span>kaised.bd@gmail.com</span>
            </a>


            <div className="footer-socials">

              <a
                href="#"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={19} />
              </a>


              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

        </motion.div>


        {/* BOTTOM AREA */}

        <div className="footer-bottom">

          <p>
            © {currentYear} Kaised. All rights reserved.
          </p>


          <p className="footer-made">
            Built with
            <Heart size={15} />
            using React
          </p>


          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={19} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;