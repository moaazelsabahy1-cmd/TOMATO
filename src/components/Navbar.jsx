import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const NAV_ITEMS = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "menu", to: "/menu" },
  { key: "services", to: "/services" },
  { key: "branches", to: "/branches" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-wrapper">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.08 }}
        >
          TOMATO
        </motion.div>

        <ul className="nav-menu">
          {NAV_ITEMS.map((item, i) => (
            <motion.li
              key={item.key}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
            >
              <Link to={item.to}>{t(`nav.${item.key}`)}</Link>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
              onClick={() => i18n.changeLanguage("en")}
            >
              {t("nav.langEn")}
            </button>
            <button
              type="button"
              className={`lang-btn ${i18n.language === "ar" ? "active" : ""}`}
              onClick={() => i18n.changeLanguage("ar")}
            >
              {t("nav.langAr")}
            </button>
          </div>

          <motion.button
            className="nav-action"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/menu")}
          >
            {t("nav.orderNow")}
          </motion.button>
        </div>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {open && (
        <motion.ul
          className="mobile-menu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link to={item.to} onClick={() => setOpen(false)}>
                {t(`nav.${item.key}`)}
              </Link>
            </li>
          ))}
          <li className="mobile-lang-row">
            <button
              type="button"
              className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
              onClick={() => {
                i18n.changeLanguage("en");
                setOpen(false);
              }}
            >
              {t("nav.langEn")}
            </button>
            <button
              type="button"
              className={`lang-btn ${i18n.language === "ar" ? "active" : ""}`}
              onClick={() => {
                i18n.changeLanguage("ar");
                setOpen(false);
              }}
            >
              {t("nav.langAr")}
            </button>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default Navbar;
