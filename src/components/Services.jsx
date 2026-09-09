import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCard";

function Services() {
  const [activeService, setActiveService] = useState("physiotherapy");

  const services = [
    {
      id: "physiotherapy",
      number: "01",
      title: "Physiotherapy",
      shortTitle: "Move freely.",
      description:
        "Professional support focused on movement, recovery, rehabilitation and improving physical function.",
      features: [
        "Injury prevention",
        "Rehabilitation support",
        "Pain management",
        "Improved mobility",
      ],
    },
    {
      id: "fitness",
      number: "02",
      title: "Fitness Training",
      shortTitle: "Build strength.",
      description:
        "Personalised fitness support designed to help you develop strength, confidence and physical performance.",
      features: [
        "Personalised programmes",
        "Strength development",
        "Weight management",
        "Performance training",
      ],
    },
    {
      id: "sports",
      number: "03",
      title: "Sports Education",
      shortTitle: "Perform smarter.",
      description:
        "Practical sports education that develops skills, physical understanding and long-term athletic potential.",
      features: [
        "Fundamental skills",
        "Physical conditioning",
        "Sports development",
        "Performance education",
      ],
    },
  ];

  const activeData = services.find(
    (service) => service.id === activeService
  );

  return (
    <section className="services-section" id="services">

      <div className="section-container">

        <div className="services-intro">

          <motion.div
            className="section-label light-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span></span>
            OUR SERVICES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Everything your body needs
            <br />
            to <span>move forward.</span>
          </motion.h2>

        </div>


        <div className="services-layout">

          {/* Interactive list */}

          <div className="service-list">

            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                active={activeService === service.id}
                onClick={() => setActiveService(service.id)}
              />
            ))}

          </div>


          {/* Dynamic content */}

          <AnimatePresence mode="wait">

            <motion.div
              key={activeData.id}
              className="service-display"
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
              }}
              transition={{
                duration: 0.45,
              }}
            >

              <div className="service-display-number">
                {activeData.number}
              </div>

              <h3>{activeData.shortTitle}</h3>

              <p>{activeData.description}</p>

              <div className="service-features">

                {activeData.features.map((feature) => (
                  <div
                    className="service-feature"
                    key={feature}
                  >
                    <span></span>
                    {feature}
                  </div>
                ))}

              </div>

              <a
                href="#contact-us"
                className="service-enquire-button"
              >
                Enquire about this service
              </a>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

export default Services;