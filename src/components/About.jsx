import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">

        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span></span>
          ABOUT KINETIC SPHERE
        </motion.div>

        <div className="about-grid">

          <motion.div
            className="about-heading"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              Movement is more
              <br />
              than exercise.
              <span> It is potential.</span>
            </h2>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p>
              Kinetic Sphere Academy provides innovative physical education
              and healthcare solutions designed to support well-being,
              movement, recovery and athletic performance.
            </p>

            <p>
              We bring together professional guidance, physical development
              and practical education to help individuals improve how they
              move, train and perform.
            </p>

            <a href="#services" className="about-link">
              Explore what we do
              <span>
                <MoveUpRight size={17} />
              </span>
            </a>
          </motion.div>

        </div>

        <motion.div
          className="about-statement"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            "We believe physical health, education and performance should
            work together."
          </p>

          <div className="statement-line"></div>

          <span>KINETIC SPHERE ACADEMY</span>
        </motion.div>

      </div>
    </section>
  );
}

export default About;