import { useState } from "react";
  import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-wrapper">

        {/* Logo */}
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.08 }}
        >
          TOMATO
        </motion.div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {["Home", "About", "Menu", "Services", "Branches"].map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
            >
              {item === "About" ? (
                <Link to="/about">{item}</Link>
              ) : item === "Home" ? (
                <Link to="/">{item}</Link>
              ) : item === "Menu" ? (
                <Link to="/menu">{item}</Link>
              ) : item === "Services" ? (
                <Link to="/services">{item}</Link>
              ) : item === "Branches" ? (
                <Link to="/branches">{item}</Link>
              ) : (
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              )}
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          className="nav-action"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now
        </motion.button>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          className="mobile-menu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {["Home", "About", "Menu", "Services", "Branches"].map((item) => (
            <li key={item}>
              {item === "About" ? (
                <Link to="/about" onClick={() => setOpen(false)}>
                  {item}
                </Link>
              ) : item === "Home" ? (
                <Link to="/" onClick={() => setOpen(false)}>
                  {item}
                </Link>
              ) : item === "Menu" ? (
                <Link to="/menu" onClick={() => setOpen(false)}>
                  {item}
                </Link>
              ) : item === "Services" ? (
                <Link to="/services" onClick={() => setOpen(false)}>
                  {item}
                </Link>
              ) : item === "Branches" ? (
                <Link to="/branches" onClick={() => setOpen(false)}>
                  {item}
                </Link>
              ) : (
                <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {item}
                </a>
              )}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default Navbar;