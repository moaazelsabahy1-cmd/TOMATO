import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {t("hero.titleLine1")} <br /> {t("hero.titleLine2")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.button
            className="hero-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const menuSection = document.getElementById("menu");
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {t("hero.viewMenu")}
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.img
            src="public/images/pexels-fidel-2814828.jpg"
            alt={t("hero.imageAlt")}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
