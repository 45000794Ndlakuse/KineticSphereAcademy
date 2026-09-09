import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-background"></div>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Orange glow */}
      <div className="hero-glow"></div>

      {/* Logo */}
      <motion.div
        className="hero-logo"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        KINETIC SPHERE
        <span>ACADEMY</span>
      </motion.div>

      {/* Left arrow
      <motion.button
        className="slider-arrow slider-arrow-left"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={26} strokeWidth={1.5} />
      </motion.button> */}

      {/* Right arrow */}
      {/* <motion.button
        className="slider-arrow slider-arrow-right"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowRight size={26} strokeWidth={1.5} />
      </motion.button> */}

      {/* Main content */}
      <div className="hero-content">

        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          WELLNESS & SPORTS EDUCATION
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
        >
          Welcome to
          <br />
          <span>Kinetic Sphere</span>
          <br />
          Academy.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
        >
          Empowering individuals through innovative physical education and healthcare solutions tailored to enhance well-being and athletic performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
        >
          <a href="#services" className="hero-button">
            Explore Services
          </a>
        </motion.div>

      </div>

      {/* Floating performance card */}
      <motion.div
        className="metric-card recovery-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
      >
        <div className="metric-circle">
          82
        </div>

        <div className="metric-info">
          <strong>Recovery</strong>
          <span>
            <i></i>
            Good
          </span>
        </div>
      </motion.div>

      {/* Sleep card */}
      <motion.div
        className="metric-card sleep-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
      >
        <div className="metric-circle">
          79
        </div>

        <div className="metric-info">
          <strong>Performance</strong>
          <span>
            <i></i>
            Stable
          </span>
        </div>
      </motion.div>

      {/* Mobility card */}
      <motion.div
        className="mobility-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
        whileHover={{
          y: -6,
        }}
      >
        <div className="mobility-header">
          <h3>Mobility Flow</h3>
          <span>25 min</span>
        </div>

        <div className="mobility-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="mobility-progress">
          <div className="progress-line">
            <div className="progress-fill"></div>
            <div className="progress-dot"></div>
          </div>

          <div className="progress-labels">
            <span>Low Intensity</span>
            <span>High Intensity</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;