// Import necessary dependencies and components
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaDiscord, FaGithub } from 'react-icons/fa'; // Import social icons

import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

// Your existing Hero component
const Hero = () => (
  <section className="h-screen flex flex-col justify-center items-center">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Goshen
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>LABS</h1>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* Social Media Links */}
      <motion.div
      variants={textVariant(1.3)} // Use your preferred animation variant
      className="flex justify-center items-center mt-4"
    >
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4"
        whileHover={{ x: 5 }}
      >
        <FaTwitter size={24} color="#ffffff" />
      </motion.a>
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4"
        whileHover={{ x: 5 }}
      >
        <FaInstagram size={24} color="#ffffff" />
      </motion.a>
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4"
        whileHover={{ x: 5 }}
      >
        <FaLinkedin size={24} color="#ffffff" />
      </motion.a>
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 5 }}
        className="mr-4"
      >
        <FaGithub size={24} color="#ffffff" />
      </motion.a>
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 5 }}
        className="mr-4"
      >
        <FaDiscord size={24} color="#ffffff" />
      </motion.a>
    </motion.div>
      <br />
      <br />
      <br />
    </motion.div>

    {/* We Build Message */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

<div className="flex flex-col items-center justify-center flex-grow">
      <motion.h1 variants={textVariant(1.5)} className={styles.heroHeading}>
          <div className="animated-text">
            We Build <span></span>
          </div>
        </motion.h1>
      <br />
      <br />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <motion.img
          variants={fadeIn('up', 'tween', 2, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain"
        />
      </div>
    </motion.div>
  </section>
);

export default Hero;
