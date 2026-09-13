import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about section">
      <div className="about-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">GET TO KNOW ME</p>

          <h2>About Me</h2>

          <p>
            Learn more about my background, interests, and professional journey.
          </p>
        </motion.div>


        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="about-text">

  <div className="about-title-line"></div>

  <h3>
    Building my future through{" "}
    <span>technology</span> and continuous learning.
  </h3>

  <p className="about-intro">
    I am an aspiring <strong>Full-Stack Developer</strong> with a strong
    interest in modern web development, <strong>Machine Learning</strong>,
    Artificial Intelligence, and technology-driven problem solving.
  </p>

  <p>
    I enjoy learning new technologies, building practical projects, and
    continuously improving my technical and professional skills. My goal
    is to become a skilled technology professional and create meaningful
    solutions that can make a positive impact.
  </p>

</div>


          <div className="about-cards">

            <div className="about-card">
              <span>🎯</span>
              <div>
                <h4>Career Focus</h4>
                <p>Full-Stack Development, AI and Machine Learning.</p>
              </div>
            </div>


            <div className="about-card">
              <span>🎓</span>
              <div>
                <h4>Academic Background</h4>
                <p>Technology-focused education and continuous learning.</p>
              </div>
            </div>


            <div className="about-card">
              <span>🚀</span>
              <div>
                <h4>Current Focus</h4>
                <p>Building projects and improving modern development skills.</p>
              </div>
            </div>


            <div className="about-card">
              <span>🌱</span>
              <div>
                <h4>My Goal</h4>
                <p>To become a skilled professional and create meaningful impact.</p>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;