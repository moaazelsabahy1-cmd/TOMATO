import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* Brand */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <motion.h2
            className="footer-logo"
            whileHover={{ scale: 1.08 }}
          >
            TOMATO
          </motion.h2>
          <p>
            Tomato Restaurant delivers fresh, delicious meals crafted with
            passion and the finest ingredients. Taste the difference.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4>Quick Links</h4>
          <ul>
            {["Home", "About", "Menu", "Services"].map((item) => (
              <motion.li key={item} whileHover={{ x: 6 }}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Opening Hours */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4>Opening Hours</h4>
          <ul>
            <li>Mon – Fri: 10:00 AM – 10:00 PM</li>
            <li>Saturday: 12:00 PM – 12:00 AM</li>
            <li>Sunday: Closed</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h4>Contact</h4>
          <ul>
            <li>📍 Cairo, Egypt</li>
            <li>📞 +20 123 456 789</li>
            <li>✉ info@tomato.com</li>
          </ul>

          <div className="footer-social">
            {["🌐", "📘", "📸"].map((icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p>© 2026 TOMATO Restaurant. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
}

export default Footer;