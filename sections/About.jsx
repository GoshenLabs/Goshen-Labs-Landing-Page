'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-0`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About Goshen Labs" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 1, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Goshen Labs</span> pioneers Web3 technology, crafting decentralized applications (dApps) and blockchain solutions. Our team creates user-friendly platforms for decentralized finance (DeFi), NFT marketplaces, and more, emphasizing transparency and security. Join us in shaping a decentralized future with limitless possibilities. Welcome to Goshen Labs.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
