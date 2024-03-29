import Divider from "../components/Divider";
import InfoBlock from "../components/InfoBlock";

function Contacts() {
  return (
    <section aria-label="contacts" id="contacts" className='container'>
      <div className='wrapper'>
        <InfoBlock
          header="Thanks for the read :)"
          blurb="If you’d like to chat, here are some places you can reach me!"
          buttonText="Resume"
          href="https://resume.creddle.io/resume/hje8hgzfv4a"
        />
      </div>
      <Divider position="top" colour="yellow" />
    </section>
  );
}

export default Contacts;