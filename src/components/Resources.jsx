import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Resources() {
  const insights = [
    {
      id: 1,
      category: "PHYSIOTHERAPY",
      title: "Understanding your body before pushing it further.",
      description:
        "A better understanding of movement, recovery and physical function can help you train more effectively and reduce unnecessary strain.",
      image: "/images/resource-physiotherapy.jpeg",
      featured: true,
    },
    {
      id: 2,
      category: "FITNESS",
      title: "Progress is built through consistency.",
      description:
        "Sustainable training habits often create better long-term results than short periods of extreme intensity.",
      image: "/images/resource-fitness.jpeg",
    },
    {
      id: 3,
      category: "SPORTS EDUCATION",
      title: "Performance begins with understanding.",
      description:
        "Developing physical skills alongside knowledge can help athletes make smarter decisions about their training and performance.",
      image: "/images/resource-sports.jpeg",
    },
  ];

  return (
    <section className="resources-section" id="resources">
      <div className="section-container">

        {/* SECTION HEADER */}

        <div className="resources-header">

          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span></span>
            RESOURCES & INSIGHTS
          </motion.div>

          <motion.div
            className="resources-heading-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              Learn more.
              <br />
              <span>Move smarter.</span>
            </h2>

            <p>
              Explore practical insights around movement, physical health,
              fitness and athletic development.
            </p>

          </motion.div>

        </div>


        {/* FEATURED RESOURCE */}

        <motion.article
          className="featured-resource"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
        >

          <div className="featured-image-wrapper">
            <img
              src={insights[0].image}
              alt={insights[0].title}
              className="featured-resource-image"
            />

            <div className="featured-image-overlay"></div>

            <span className="featured-number">
              01
            </span>
          </div>


          <div className="featured-content">

            <div className="resource-category">
              {insights[0].category}
            </div>

            <h3>
              {insights[0].title}
            </h3>

            <p>
              {insights[0].description}
            </p>

            <button className="resource-button">
              Read Insight

              <span>
                <ArrowUpRight size={18} />
              </span>
            </button>

          </div>

        </motion.article>


        {/* SMALLER RESOURCES */}

        <div className="resource-grid">

          {insights.slice(1).map((insight, index) => (

            <motion.article
              className="resource-card"
              key={insight.id}
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
            >

              <div className="resource-image-wrapper">

                <img
                  src={insight.image}
                  alt={insight.title}
                  className="resource-image"
                />

                <span className="resource-number">
                  0{index + 2}
                </span>

              </div>


              <div className="resource-card-content">

                <div className="resource-category">
                  {insight.category}
                </div>

                <h3>
                  {insight.title}
                </h3>

                <p>
                  {insight.description}
                </p>

                <button
                  className="resource-circle-button"
                  aria-label={`Read ${insight.title}`}
                >
                  <ArrowUpRight size={19} />
                </button>

              </div>

            </motion.article>

          ))}

        </div>


        {/* BOTTOM MESSAGE */}

        <motion.div
          className="resources-bottom-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span></span>

          <p>
            Knowledge is part of performance.
          </p>

          <span></span>

        </motion.div>

      </div>
    </section>
  );
}

export default Resources;