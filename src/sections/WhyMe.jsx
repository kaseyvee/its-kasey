import { data } from "../data";
import ValueList from "../components/ValueList";

function WhyMe() {
  const values = data.whyMe;

  return (
    <section aria-labelledby="why-me-title" id="me" className="why-me | container">
      <div className="wrapper">
        <h2 id="why-me-title">Why Me?</h2>
        <ValueList values={values} />
      </div>
    </section>
  );
}

export default WhyMe;