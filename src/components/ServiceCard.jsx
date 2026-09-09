import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service, active, onClick }) {
  return (
    <motion.button
      className={`service-card ${active ? "active-service" : ""}`}
      onClick={onClick}
      whileHover={{
        x: 8,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <div className="service-card-number">
        {service.number}
      </div>

      <div className="service-card-content">
        <h3>{service.title}</h3>

        <p>
          {active
            ? service.description
            : "Discover how this service supports your performance."
          }
        </p>
      </div>

      <div className="service-card-icon">
        <ArrowUpRight size={21} />
      </div>
    </motion.button>
  );
}

export default ServiceCard;