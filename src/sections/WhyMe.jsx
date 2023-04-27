import { data } from "../data";
import ValueList from "../components/ValueList";

function WhyMe() {
  const values = data.whyMe;

  return (
    <section aria-labelledby="header" id="me" className="why-me container">
      <div className="wrapper">
        <h2 id="header">Why Me?</h2>
        <ValueList values={values} />
      </div>
    </section>
  );
}

export default WhyMe;