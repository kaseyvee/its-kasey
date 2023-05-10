import company from '../helpers/data';
import InfoBlock from "../components/InfoBlock"
import Divider from '../components/Divider';

function Hero() {
  return (
    <section aria-label='hero' className='hero | container'>
      <div className='wrapper'>
        <InfoBlock
          hero={true}
          header={`Hi ${company}!`}
          blurb="Thanks for taking the time to click on my online cover letter. Regular cover letters can be boring- so I wanted to take an opportunity to showcase my skills while introducing myself!"
          buttonText="Get to know me"
          href="#about"
        />
      </div>
      <Divider position="bottom" colour="yellow" />
    </section>
  );
}

export default Hero;