import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
  CalendarDays,
} from "lucide-react";

function Education() {
  const educationData = [
    {
      icon: <GraduationCap size={26} />,
      type: "UNIVERSITY",
      degree: "Bachelor's Degree",
      institution: "Your University Name",
      year: "20XX — Present",
      description:
        "Building a strong academic foundation while developing practical knowledge in technology, programming, and modern computing.",
      status: "Current Journey",
    },
    {
      icon: <BookOpen size={26} />,
      type: "HIGHER SECONDARY",
      degree: "Higher Secondary Certificate",
      institution: "Your College Name",
      year: "20XX — 20XX",
      description:
        "Developed academic knowledge and strengthened my interest in technology, logical thinking, and continuous learning.",
      status: "Completed",
    },
    {
      icon: <School size={26} />,
      type: "SECONDARY",
      degree: "Secondary School Certificate",
      institution: "Your School Name",
      year: "20XX — 20XX",
      description:
        "Built the academic foundation that started my educational journey and interest in learning and personal development.",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="education section">
      <div className="education-container">

        {/* SECTION HEADING */}
        <motion.div
          className="section-heading education-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">
            MY ACADEMIC JOURNEY
          </p>

          <h2>Education & Learning</h2>

          <p>
            My educational journey has helped build the foundation of my
            knowledge, curiosity, and continuous interest in technology and
            professional development.
          </p>
        </motion.div>


        {/* EDUCATION TIMELINE */}
        <div className="education-timeline">

          <div className="timeline-line"></div>

          {educationData.map((education, index) => (

            <motion.article
              className={`education-item education-item-${index}`}
              key={education.type}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              {/* TIMELINE DOT */}
              <div className="timeline-dot">
                <div className="timeline-icon">
                  {education.icon}
                </div>
              </div>


              {/* EDUCATION CARD */}
              <div className="education-card">

                <div className="education-card-top">

                  <span className="education-type">
                    {education.type}
                  </span>

                  <span className="education-status">
                    {education.status}
                  </span>

                </div>


                <h3>
                  {education.degree}
                </h3>


                <h4>
                  {education.institution}
                </h4>


                <div className="education-year">

                  <CalendarDays size={17} />

                  <span>
                    {education.year}
                  </span>

                </div>


                <p>
                  {education.description}
                </p>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;