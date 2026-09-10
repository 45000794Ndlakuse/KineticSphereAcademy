import { motion } from "framer-motion";
import {
  Activity,
  Target,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

function WhyChooseUs() {
  const values = [
    {
      number: "01",
      title: "Move with purpose.",
      description:
        "Every programme and service is designed to support meaningful physical development, healthier movement and long-term progress.",
      icon: <Activity size={28} strokeWidth={1.5} />,
    },
    {
      number: "02",
      title: "Train for progress.",
      description:
        "We focus on practical development that helps individuals build confidence, improve performance and reach their physical potential.",
      icon: <Target size={28} strokeWidth={1.5} />,
    },
    {
      number: "03",
      title: "Learn for life.",
      description:
        "Our approach combines physical development with education so that individuals better understand their bodies, movement and performance.",
      icon: <GraduationCap size={28} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="why-section" id="why-choose-us">
      <div className="section-container">

        <motion.div
          className="why-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">
            <span></span>
            WHY KINETIC SPHERE
          </div>

          <p>
            A connected approach to physical health,
            performance and education.
          </p>
        </motion.div>

        <div className="why-heading-wrapper">

          <motion.h2
            className="why-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          >
            Your body is a system.
            <br />
            <span>Train it accordingly.</span>
          </motion.h2>

        </div>


        {/* VALUE CARDS */}

        <div className="value-grid">

          {values.map((value, index) => (

            <motion.article
              key={value.number}
              className="value-card"
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

              <div className="value-card-top">

                <span className="value-number">
                  {value.number}
                </span>

                <div className="value-icon">
                  {value.icon}
                </div>

              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

              <button
                className="value-arrow"
                aria-label={`Learn more about ${value.title}`}
              >
                <ArrowUpRight size={20} />
              </button>

            </motion.article>

          ))}

        </div>


        {/* PERFORMANCE STRIP */}

        <motion.div
          className="performance-strip"
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="performance-intro">

            <span>OUR APPROACH</span>

            <h3>
              Better movement.
              <br />
              Better understanding.
              <br />
              Better performance.
            </h3>

          </div>


          <div className="performance-items">

            <div className="performance-item">

              <strong>01</strong>

              <span>
                Understand your
                starting point
              </span>

            </div>

            <div className="performance-item">

              <strong>02</strong>

              <span>
                Develop with
                professional guidance
              </span>

            </div>

            <div className="performance-item">

              <strong>03</strong>

              <span>
                Build sustainable
                progress
              </span>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;