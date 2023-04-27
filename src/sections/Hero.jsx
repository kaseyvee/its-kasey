import company from '../data';
import InfoBlock from "../components/InfoBlock"

function Hero() {
  return (
    <section aria-labelledby='landing-page' className='hero'>
      <div className='wrapper'>
        <InfoBlock
          id="landing-page"
          hero={true}
          header={`Hi ${company}!`}
          blurb="Thanks for taking the time to click on my online cover letter. Regular cover letters can be boring- so I wanted to take an opportunity to showcase my skills while showing you why I’d love to be apart of the team!"
          buttonText="Get to know me"
        />
      </div>
    </section>
  );
}

export default Hero;