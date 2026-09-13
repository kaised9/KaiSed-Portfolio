import { motion } from "framer-motion";
import {
  FileText,
  Eye,
  Download,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="resume-container">

        {/* SECTION INTRO */}

        <motion.div
          className="resume-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="resume-label">
            <Sparkles size={16} />
            <span>PROFESSIONAL PROFILE</span>
          </div>

          <h2>
            My Professional
            <span> Resume.</span>
          </h2>

          <p>
            A complete overview of my education, technical skills,
            projects, achievements, and professional journey.
          </p>
        </motion.div>


        {/* DIGITAL DOCUMENT EXPERIENCE */}

        <motion.div
          className="resume-stage"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >

          {/* BACKGROUND DOCUMENT LAYERS */}

          <div className="resume-paper-layer layer-one"></div>
          <div className="resume-paper-layer layer-two"></div>


          {/* MAIN RESUME DOCUMENT */}

          <motion.div
            className="resume-document"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="resume-document-top">

              <div className="resume-document-icon">
                <FileText size={34} />
              </div>

              <span>PDF</span>

            </div>


            <div className="resume-document-content">

              <p className="resume-document-name">
                KAISED
              </p>

              <h3>
                Professional Resume
              </h3>

              <div className="resume-lines">

                <span></span>
                <span></span>
                <span></span>
                <span></span>

              </div>

            </div>


            <div className="resume-document-footer">

              <CheckCircle2 size={17} />

              <span>Ready to Download</span>

            </div>

          </motion.div>

        </motion.div>


        {/* RESUME ACTION AREA */}

        <motion.div
          className="resume-actions-area"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >

          <div className="resume-meta">

            <span>
              <CheckCircle2 size={16} />
              Updated CV
            </span>

            <span>
              <FileText size={16} />
              PDF Format
            </span>

            <span>
              <Download size={16} />
              Available Now
            </span>

          </div>


          <div className="resume-buttons">

            {/* VIEW CV */}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-view-button"
            >
              <Eye size={19} />

              <span>View CV</span>
            </a>


            {/* DOWNLOAD CV */}

            <a
              href="/resume.pdf"
              download
              className="resume-download-button"
            >
              <Download size={19} />

              <span>Download CV</span>
            </a>

          </div>


          <p className="resume-updated">
            Last updated: September 2026
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Resume;