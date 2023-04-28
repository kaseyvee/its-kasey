import me from "../assets/me.png";
import { useMediaQuery } from "react-responsive";

function About() {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px) and (min-height: 550px)"});

  return (
    <section aria-label="about" id="about" className="about | container">
      <div className="wrapper">
        {!isDesktop && <h2>I&apos;m Kasey :)</h2>}
        <div className="about_img-container">
          <img src={me} alt="Kasey in front of Stonehendge lol" />
        </div>
        <div className="about_words">
          {isDesktop && <h2>I&apos;m Kasey :)</h2>}
          <div className="about_words_description">
            <p>I&apos;m a fullstack web developer with a particular love for the frontend, where I get to bring beautiful designs to life and showcase my creativity and problem-solving skills. Web development has allowed me to turn my internet addiction into the perfect combination: a career and creative outlet!</p>
            <p>When I&apos;m away from the terminal, you can usually find me watching movies and TV shows, or out and about exploring new restaurants and bars with my friends.</p>
            <p>I can also obliterate a litre jar of kimchi in one sitting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;