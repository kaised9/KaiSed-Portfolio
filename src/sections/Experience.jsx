import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

function Experience() {
  const experienceData = [
    {
      icon: <BriefcaseBusiness size={26} />,
      number: "01",
      title: "Professional Experience",
      subtitle: "Building Practical Experience",
      description:
        "Continuously developing professional skills through practical learning, personal projects, and real-world technology challenges.",
      tags: ["Problem Solving", "Projects", "Professional Growth"],
      status: "Growing",
    },
    {
      icon: <Building2 size={26} />,
      number: "02",
      title: "Industrial Training",
      subtitle: "Learning Through Practice",
      description:
        "Gaining practical exposure to professional environments, technology workflows, and industry-related learning experiences.",
      tags: ["Industry Learning", "Technology", "Practical Skills"],
      status: "Learning",
    },
    {
      icon: <GraduationCap size={26} />,
      number: "03",
      title: "Academic Experience",
      subtitle: "Knowledge & Research",
      description:
        "Developing knowledge through academic projects, research activities, technology exploration, and continuous technical learning.",
      tags: ["Research", "Academic Projects", "Analysis"],
      status: "Developing",
    },
    {
      icon: <Rocket size={26} />,
      number: "04",
      title: "Learning Journey",
      subtitle: "Continuous Improvement",
      description:
        "Actively learning modern web development, Machine Learning, Artificial Intelligence, and other technologies to build a strong professional future.",
      tags: ["Web Development", "AI", "Machine Learning"],
      status: "Active",
    },
  ];

  return (
    <section id="experience" className="experience section">
      <div className="experience-container">

        {/* SECTION HEADING */}
        <motion.div
          className="section-heading experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">
            MY PROFESSIONAL JOURNEY
          </p>

          <h2>Experience & Growth</h2>

          <p>
            A journey of continuous learning, practical experience, professional
            development, and building the skills needed to create meaningful
            technology solutions.
          </p>
        </motion.div>

        {/* EXPERIENCE ROADMAP */}
        <div className="experience-grid">
          {experienceData.map((experience, index) => (
            <motion.article
              className="experience-card"
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -10 }}
            >
              {/* TOP */}
              <div className="experience-card-top">
                <span className="experience-number">
                  {experience.number}
                </span>

                <span className="experience-status">
                  {experience.status}
                </span>
              </div>

              {/* ICON */}
              <div className="experience-icon">
                {experience.icon}
              </div>

              {/* CONTENT */}
              <p className="experience-subtitle">
                {experience.subtitle}
              </p>

              <h3>{experience.title}</h3>

              <p className="experience-description">
                {experience.description}
              </p>

              {/* TAGS */}
              <div className="experience-tags">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* DECORATIVE ARROW */}
              <div className="experience-arrow">
                <ArrowUpRight size={20} />
              </div>

              {/* PROGRESS LINE */}
              <div className="experience-progress">
                <span></span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;