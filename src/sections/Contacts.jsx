import Divider from "../components/Divider";
import InfoBlock from "../components/InfoBlock";

function Contacts() {
  return (
    <section aria-labelledby='landing-page' className='hero container'>
      <div className='wrapper'>
        <InfoBlock
          id="landing-page"
          header="Thanks for the read :)"
          blurb="If you’d like to chat, here are some places you can reach me!"
          buttonText="Get to know me"
        />
      </div>
      <Divider position="top" />
    </section>
  );
}

export default Contacts;