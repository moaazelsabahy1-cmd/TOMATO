import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const QUICK_LINKS = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "menu", to: "/menu" },
  { key: "services", to: "/services" },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
          <p>{t("footer.tagline")}</p>
        </motion.div>

        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4>{t("footer.quickLinks")}</h4>
          <ul>
            {QUICK_LINKS.map((item) => (
              <motion.li key={item.key} whileHover={{ x: 6 }}>
                <Link to={item.to}>{t(`nav.${item.key}`)}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4>{t("footer.openingHours")}</h4>
          <ul>
            <li>{t("footer.weekdays")}</li>
            <li>{t("footer.saturday")}</li>
            <li>{t("footer.sunday")}</li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h4>{t("footer.contact")}</h4>
          <ul>
            <li>📍 {t("footer.location")}</li>
            <li>📞 {t("footer.phone")}</li>
            <li>✉ {t("footer.email")}</li>
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

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p>{t("footer.copyright")}</p>
      </motion.div>
    </footer>
  );
}

export default Footer;
