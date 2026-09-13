import { motion } from "framer-motion";
import { ArrowDown, Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImage from "../assets/images/Profile Picture.png";

function Home() {
  return (
    <section id="home" className="home section">
      <div className="home-container">

        <div className="home-content">

          {/* LEFT SIDE - TEXT */}
          <div className="home-text">

            <motion.div
              className="home-status"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </motion.div>


            <motion.p
              className="home-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hello, I'm
            </motion.p>


            <motion.h1
              className="home-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Kai<span>Sed</span>
            </motion.h1>


            <motion.div
              className="home-title-wrapper"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="home-title-line"></span>

              <h2 className="home-title">
                Aspiring Full-Stack Developer
              </h2>
            </motion.div>


            <motion.p
              className="home-description"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Building modern digital experiences with{" "}
              <strong>Web Development</strong>, exploring{" "}
              <strong>Artificial Intelligence</strong>, and continuously
              growing through <strong>Machine Learning</strong> and
              technology-driven problem solving.
            </motion.p>


            <motion.div
              className="home-buttons"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work
                <ArrowRight size={18} />
              </a>

              <a href="/resume.pdf" className="btn btn-secondary">
                Download Resume
              </a>
            </motion.div>


            <motion.div
              className="home-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a href="#" aria-label="GitHub">
                <FaGithub size={20} />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>

              <a href="#" aria-label="Email">
                <Mail size={20} />
              </a>
            </motion.div>

          </div>


          {/* RIGHT SIDE - PROFILE IMAGE */}
          <motion.div
            className="home-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >

            <div className="home-image-glow"></div>

            <div className="profile-image-decoration decoration-one"></div>
            <div className="profile-image-decoration decoration-two"></div>

            <img
              src={profileImage}
              alt="Kaised Mollick"
              className="home-profile-image"
            />

            <div className="profile-badge">
              <span>💻</span>
              <p>
                Building<br />
                the Future
              </p>
            </div>

          </motion.div>

        </div>


        <motion.a
          href="#about"
          className="scroll-indicator"
          aria-label="Scroll to About section"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>Scroll to explore</span>
          <ArrowDown size={20} />
        </motion.a>

      </div>
    </section>
  );
}

export default Home;