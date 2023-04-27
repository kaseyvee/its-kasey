import { data } from "../data";
import ValueList from "../components/ValueList";

function WhyMe() {
  const values = data.whyMe;

  return (
    <section aria-labelledby="header" id="me" className="why-me container">
      <div className="wrapper">
        <h2 id="header">Why Me?</h2>
        <div>
          <ValueList values={values} />
        </div>
      </div>
    </section>
  );
}

export default WhyMe;