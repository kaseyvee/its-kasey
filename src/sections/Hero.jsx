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
          blurb="Thanks for taking the time to visit my website. Here is where you get to learn all about my web development journey. :)"
          buttonText="Get to know me"
          href="#about"
        />
      </div>
      <Divider position="bottom" colour="yellow" />
    </section>
  );
}

export default Hero;