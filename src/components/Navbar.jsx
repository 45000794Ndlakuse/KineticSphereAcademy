import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    {
      label: "Home",
      id: "home",
    },
    {
      label: "About",
      id: "about",
    },
    {
      label: "Services",
      id: "services",
    },
    {
      label: "Why Us",
      id: "why-choose-us",
    },
    {
      label: "Resources",
      id: "resources",
    },
    {
      label: "Get Started",
      id: "contact-us",
    },
  ];

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      className="floating-navbar"
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}
    >
      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() =>
              scrollToSection(item.id)
            }
            className={`nav-link ${activeSection === item.id
                ? "active-nav-link" && "nav-cta"
                : ""
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* <button
        className="nav-cta"
        onClick={() =>
          scrollToSection("contact-us")
        }
      >
        Get Started
      </button> */}
    </motion.nav>
  );
}

export default Navbar;