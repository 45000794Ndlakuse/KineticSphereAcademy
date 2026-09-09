import { motion } from "framer-motion";

function Navbar() {
  const navItems = [
    "How it works",
    "Services",
    "About",
    "Resources",
    "Contact Us",
  ];

  const scrollToSection = (section) => {
    const id = section
      .toLowerCase()
      .replace(/\s+/g, "-");

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className="floating-navbar"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1,
      }}
    >
      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="nav-link"
          >
            {item}
          </button>
        ))}
      </div>

      <a
        href="#contact-us"
        className="nav-cta"
      >
        Get Started
      </a>
    </motion.nav>
  );
}

export default Navbar;