import { data } from "../helpers/data";
import ValueList from "../components/ValueList";
import Divider from "../components/Divider";

function WhyMe() {
  const values = data.whyMe;

  return (
    <section aria-labelledby="why-me-title" id="me" className="why-me | container">
      <Divider colour="yellow" position="top"/>
      <div className="wrapper">
        <h2 id="why-me-title">Why Me?</h2>
        <ValueList values={values} />
      </div>
    </section>
  );
}

export default WhyMe;