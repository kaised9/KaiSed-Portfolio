import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  Star,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

function Achievements() {
  const achievements = [
    {
      id: "01",
      title: "Academic Achievement",
      description:
        "Focused on continuous academic growth, technology learning, and building a strong foundation for a professional career.",
      icon: <Trophy size={34} />,
      type: "FEATURED MILESTONE",
    },
    {
      id: "02",
      title: "Technical Learning",
      description:
        "Continuously developing practical skills in web development, programming, Artificial Intelligence, and modern technologies.",
      icon: <Award size={28} />,
      type: "SKILL DEVELOPMENT",
    },
    {
      id: "03",
      title: "Project Building",
      description:
        "Building practical projects to transform knowledge into real-world technical experience.",
      icon: <Medal size={28} />,
      type: "PRACTICAL EXPERIENCE",
    },
    {
      id: "04",
      title: "Continuous Growth",
      description:
        "Dedicated to learning, improving, and reaching new professional milestones.",
      icon: <Star size={28} />,
      type: "PERSONAL GROWTH",
    },
  ];

  return (
    <section id="achievements" className="achievements section">
      <div className="achievements-background">
        ACHIEVEMENTS
      </div>

      <div className="achievements-container">

        {/* SECTION HEADING */}

        <motion.div
          className="section-heading achievements-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="achievement-heading-label">
            <Sparkles size={16} />
            <span>MILESTONES & GROWTH</span>
          </div>

          <h2>
            Achievements That
            <span> Define My Journey.</span>
          </h2>

          <p>
            Every achievement represents progress, dedication, learning,
            and another step toward becoming a better technology
            professional.
          </p>
        </motion.div>


        {/* ACHIEVEMENT SHOWCASE */}

        <div className="achievement-showcase">

          {/* FEATURED ACHIEVEMENT */}

          <motion.article
            className="achievement-featured"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="featured-achievement-glow"></div>

            <div className="featured-achievement-top">
              <div className="achievement-trophy">
                <Trophy size={42} />
              </div>

              <span className="achievement-id">
                {achievements[0].id}
              </span>
            </div>

            <div className="featured-achievement-content">

              <span className="achievement-type">
                {achievements[0].type}
              </span>

              <h3>
                {achievements[0].title}
              </h3>

              <p>
                {achievements[0].description}
              </p>

            </div>

            <div className="achievement-featured-footer">
              <BadgeCheck size={20} />

              <span>
                Growth Through Dedication
              </span>
            </div>

          </motion.article>


          {/* SIDE ACHIEVEMENTS */}

          <div className="achievement-side-list">

            {achievements.slice(1).map((achievement, index) => (

              <motion.article
                className="achievement-item"
                key={achievement.id}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  delay: index * 0.15,
                }}
              >

                <div className="achievement-item-icon">
                  {achievement.icon}
                </div>

                <div className="achievement-item-content">

                  <div className="achievement-item-top">

                    <span>
                      {achievement.type}
                    </span>

                    <small>
                      {achievement.id}
                    </small>

                  </div>

                  <h3>
                    {achievement.title}
                  </h3>

                  <p>
                    {achievement.description}
                  </p>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Achievements;