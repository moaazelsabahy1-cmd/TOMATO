import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const STATS = [
  { num: "10+", labelKey: "about.stats.years" },
  { num: "50+", labelKey: "about.stats.menuItems" },
  { num: "20K+", labelKey: "about.stats.customers" },
];
const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%25' height='100%25' fill='%23f3f4f6'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='36'>Image not found</text></svg>";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/images/pexels-qaarif-16018410.jpg"
            alt={t("about.imageAlt")}
            onError={(e) => {
              if (e.currentTarget.src !== FALLBACK_IMAGE) {
                e.currentTarget.src = FALLBACK_IMAGE;
              }
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("about.title")}
          </motion.h2>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t("about.p1")}
          </motion.p>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {t("about.p2")}
          </motion.p>

          <motion.div
            className="about-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {STATS.map((item) => (
              <motion.div
                key={item.labelKey}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3>{item.num}</h3>
                <span>{t(item.labelKey)}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="about-btn"
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("about.learnMore")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
