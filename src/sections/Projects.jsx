import { motion } from "framer-motion";

import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Sparkles,
  BrainCircuit,
  BarChart3,
  Layers,
  Globe2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";


function Projects() {
  const projects = [
    {
      id: "01",
      title: "Smart Portfolio Website",
      category: "FEATURED PROJECT",
      description:
        "A modern personal portfolio website designed with smooth animations, responsive layouts, premium interactions, dark mode, and a user-friendly experience.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Framer Motion",
      ],
      icon: <Globe2 size={42} />,
      accent: "portfolio",
      featured: true,
      github: "#",
      demo: "#",
    },

    {
      id: "02",
      title: "AI & Machine Learning Project",
      category: "MACHINE LEARNING",
      description:
        "A practical project focused on exploring machine learning concepts, intelligent systems, data processing, and technology-driven problem solving.",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analysis",
      ],
      icon: <BrainCircuit size={30} />,
      github: "#",
      demo: "#",
    },

    {
      id: "03",
      title: "Modern Web Application",
      category: "WEB DEVELOPMENT",
      description:
        "A responsive web application built with modern development practices, clean interfaces, smooth interactions, and a strong focus on user experience.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "MongoDB",
      ],
      icon: <Code2 size={30} />,
      github: "#",
      demo: "#",
    },

    {
      id: "04",
      title: "Data Analysis Dashboard",
      category: "DATA ANALYSIS",
      description:
        "A project focused on analyzing data, discovering useful insights, and presenting information through clear and meaningful visualizations.",
      technologies: [
        "Python",
        "Pandas",
        "Data Analysis",
        "Visualization",
      ],
      icon: <BarChart3 size={30} />,
      github: "#",
      demo: "#",
    },

    {
      id: "05",
      title: "Full-Stack Web Platform",
      category: "FULL-STACK DEVELOPMENT",
      description:
        "A modern full-stack application exploring frontend development, backend architecture, databases, APIs, and real-world application workflows.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      icon: <Layers size={30} />,
      github: "#",
      demo: "#",
    },
  ];


  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);


  return (
    <section id="projects" className="projects section">

      <div className="projects-container">


        {/* =========================
            SECTION HEADING
        ========================= */}

        <motion.div
          className="section-heading projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >

          <div className="projects-heading-top">

            <p className="section-subtitle">
              SELECTED WORK
            </p>

            <div className="projects-count">
              <span>05</span>
              Projects
            </div>

          </div>


          <h2>
            Ideas turned into
            <span> digital experiences.</span>
          </h2>


          <p>
            A collection of projects where I explore modern technology,
            solve problems, experiment with new ideas, and transform
            concepts into practical digital experiences.
          </p>

        </motion.div>



        {/* =========================
            FEATURED PROJECT
        ========================= */}

        <motion.article
          className="featured-project"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >


          {/* FEATURED VISUAL */}

          <div className="featured-project-visual">

            <div className="project-visual-glow"></div>


            {/* PROJECT NUMBER */}

            <div className="featured-number-bg">
              {featuredProject.id}
            </div>


            {/* BROWSER WINDOW */}

            <div className="project-window">

              <div className="project-window-top">

                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="window-url">
                  kaised.dev
                </div>

              </div>


              <div className="project-window-content">

                <motion.div
                  className="featured-icon"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {featuredProject.icon}
                </motion.div>


                <span>
                  PREMIUM WEB EXPERIENCE
                </span>


                <div className="window-lines">

                  <div></div>
                  <div></div>
                  <div></div>

                </div>

              </div>

            </div>


            {/* DECORATION */}

            <Sparkles
              className="project-sparkle sparkle-one"
              size={24}
            />

            <Sparkles
              className="project-sparkle sparkle-two"
              size={18}
            />

          </div>



          {/* FEATURED CONTENT */}

          <div className="featured-project-content">


            <div className="project-top-row">

              <span className="project-category">
                {featuredProject.category}
              </span>


              <span className="project-number">
                PROJECT {featuredProject.id}
              </span>

            </div>


            <h3>
              {featuredProject.title}
            </h3>


            <p>
              {featuredProject.description}
            </p>


            {/* TECHNOLOGIES */}

            <div className="project-technologies">

              {featuredProject.technologies.map(
                (technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                )
              )}

            </div>


            {/* PROJECT LINKS */}

            <div className="project-links">


              <a
                href={featuredProject.github}
                className="project-link primary-link"
                aria-label="View project code"
              >

                <FaGithub size={18} />

                <span>
                  View Code
                </span>

                <ArrowUpRight size={17} />

              </a>


              <a
                href={featuredProject.demo}
                className="project-link secondary-link"
                aria-label="View live demo"
              >

                <ExternalLink size={18} />

                <span>
                  Live Demo
                </span>

              </a>


            </div>

          </div>

        </motion.article>



        {/* =========================
            PROJECTS INTRO
        ========================= */}

        <motion.div
          className="projects-mini-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <span></span>

          <p>
            MORE PROJECTS
          </p>

        </motion.div>



        {/* =========================
            OTHER PROJECTS
        ========================= */}

        <div className="projects-grid">

          {otherProjects.map((project, index) => (

            <motion.article
              className="project-card"
              key={project.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
              }}
            >


              {/* CARD HEADER */}

              <div className="project-card-header">

                <span className="project-category">
                  {project.category}
                </span>


                <span className="project-number">
                  {project.id}
                </span>

              </div>



              {/* PROJECT ICON */}

              <div className="project-card-icon">

                {project.icon}

              </div>



              {/* PROJECT TITLE */}

              <h3>
                {project.title}
              </h3>



              {/* DESCRIPTION */}

              <p>
                {project.description}
              </p>



              {/* TECHNOLOGIES */}

              <div className="project-technologies">

                {project.technologies.map(
                  (technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  )
                )}

              </div>



              {/* FOOTER */}

              <div className="project-card-footer">


                <span className="project-status">

                  <span></span>

                  Available

                </span>


                <div className="project-card-actions">


                  <a
                    href={project.github}
                    aria-label={`View ${project.title} code`}
                  >

                    <FaGithub size={20} />

                  </a>


                  <a
                    href={project.demo}
                    aria-label={`View ${project.title} live demo`}
                  >

                    <ArrowUpRight size={21} />

                  </a>


                </div>

              </div>

            </motion.article>

          ))}

        </div>


      </div>

    </section>
  );
}

export default Projects;