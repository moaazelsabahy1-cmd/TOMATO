import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Image */}
        <motion.div
          className="about-image"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/images/pexels-qaarif-16018410.jpg"
            alt="About Tomato Restaurant"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Content */}
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
            Our Story
          </motion.h2>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Tomato Restaurant was founded with a simple idea: to serve
            delicious food made from fresh ingredients and real passion.
            What started as a small kitchen has grown into a place where
            people come together to enjoy unforgettable flavors.
          </motion.p>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Every dish we prepare tells a story of quality, care, and love
            for cooking. From classic recipes to modern creations, our
            chefs work tirelessly to bring you an authentic dining
            experience that feels just like home.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="about-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {[
              { num: "10+", label: "Years of Experience" },
              { num: "50+", label: "Menu Items" },
              { num: "20K+", label: "Happy Customers" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3>{item.num}</h3>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="about-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

export default About;