import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Text */}
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
            Order your <br /> favourite food here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise.
            Our mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </motion.p>

          <motion.button
            className="hero-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Menu
          </motion.button>
        </motion.div>

        {/* Image - right side */}
        <motion.div
          className="hero-image"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.img
            src="public/images/pexels-fidel-2814828.jpg"
            alt="food"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;