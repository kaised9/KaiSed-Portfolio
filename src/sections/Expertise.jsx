import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  BarChart3,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

function Expertise() {
  const expertiseData = [
    {
      icon: <Brain size={32} />,
      number: "01",
      title: "Machine Learning & AI",
      description:
        "Exploring intelligent systems, machine learning concepts, artificial intelligence, and data-driven solutions.",
    },
    {
      icon: <Code2 size={32} />,
      number: "02",
      title: "Web Development",
      description:
        "Building modern, responsive, user-friendly web applications with a focus on clean design and smooth experiences.",
    },
    {
      icon: <BarChart3 size={32} />,
      number: "03",
      title: "Research & Data Analysis",
      description:
        "Analyzing information, exploring data, identifying patterns, and turning insights into meaningful solutions.",
    },
    {
      icon: <Lightbulb size={32} />,
      number: "04",
      title: "Problem Solving",
      description:
        "Approaching challenges with logical thinking, curiosity, creativity, and technology-driven solutions.",
    },
  ];

  return (
    <section id="expertise" className="expertise section">
      <div className="expertise-container">

        <motion.div
          className="section-heading expertise-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">WHAT I FOCUS ON</p>

          <h2>My Expertise</h2>

          <p>
            Exploring technology, building practical skills, and continuously
            developing expertise across modern digital fields.
          </p>
        </motion.div>


        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <motion.article
              className="expertise-card"
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="expertise-card-top">

                <span className="expertise-number">
                  {item.number}
                </span>

                <span className="expertise-arrow">
                  <ArrowUpRight size={20} />
                </span>

              </div>


              <div className="expertise-icon">
                {item.icon}
              </div>


              <h3>{item.title}</h3>

              <p>{item.description}</p>


              <div className="expertise-line">
                <span></span>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Expertise;