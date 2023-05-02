import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import me from "../assets/me.png";

function About() {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px) and (min-height: 550px)"});

  const listItemMotion = {
    mobile: { opacity: [0, 1], x: [100, 0] },
    desktop: { opacity: [0, 1], y: [-100, 0] }
  }

  return (
    <section aria-label="about" id="about" className="about | container">
      <div className="wrapper">
        {!isDesktop && <h2>I&apos;m Kasey :)</h2>}
        <motion.div
          className="about_img-container"
          viewport={{ once: true }}
          whileInView={{ scaleX: [0, 1] }}
          // transition={{ duration: 0.2 }}
        >
          <img src={me} alt="Kasey in front of Stonehendge lol" />
        </motion.div>
        <div
          className="about_words"
        >
          {isDesktop && <h2>I&apos;m Kasey :)</h2>}
          <motion.div
            className="about_words_description"
            viewport={{ once: true }}
            whileInView={isDesktop ? "desktop" : "mobile"}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.p variants={listItemMotion}>I&apos;m a fullstack web developer with a particular love for the frontend, where I get to bring beautiful designs to life and showcase my creativity and problem-solving skills. Web development has allowed me to turn my internet addiction into the perfect combination: a career and creative outlet!</motion.p>
            <motion.p variants={listItemMotion}>When I&apos;m away from the terminal, you can usually find me watching movies and TV shows, or out and about exploring new restaurants and bars with my friends.</motion.p>
            <motion.p variants={listItemMotion}>I can also obliterate a litre jar of kimchi in one sitting.</motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;