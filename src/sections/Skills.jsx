import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Globe,
  Database,
  Wrench,
  Users,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={28} />,
      number: "01",
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C", "C++"],
    },
    {
      icon: <Brain size={28} />,
      number: "02",
      title: "Machine Learning & AI",
      skills: [
        "Machine Learning",
        "Artificial Intelligence",
        "Data Analysis",
        "Python Libraries",
      ],
    },
    {
      icon: <Globe size={28} />,
      number: "03",
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
      ],
    },
    {
      icon: <Database size={28} />,
      number: "04",
      title: "Database",
      skills: [
        "MongoDB",
        "MySQL",
        "Database Design",
      ],
    },
    {
      icon: <Wrench size={28} />,
      number: "05",
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "REST API",
      ],
    },
    {
      icon: <Users size={28} />,
      number: "06",
      title: "Professional Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Teamwork",
        "Continuous Learning",
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="skills-container">

        {/* SECTION HEADING */}
        <motion.div
          className="section-heading skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">
            MY TECHNICAL TOOLKIT
          </p>

          <h2>Skills & Technologies</h2>

          <p>
            A growing collection of technical knowledge, tools, and
            professional abilities that I continuously develop through
            learning and practical projects.
          </p>
        </motion.div>


        {/* SKILLS GRID */}
        <div className="skills-grid">

          {skillCategories.map((category, index) => (

            <motion.article
              className="skills-card"
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >

              {/* TOP AREA */}
              <div className="skills-card-top">

                <span className="skills-number">
                  {category.number}
                </span>

                <div className="skills-icon">
                  {category.icon}
                </div>

              </div>


              {/* TITLE */}
              <h3>{category.title}</h3>


              {/* SKILL TAGS */}
              <div className="skills-tags">

                {category.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}

              </div>


              {/* DECORATIVE LINE */}
              <div className="skills-card-line">
                <span></span>
              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;