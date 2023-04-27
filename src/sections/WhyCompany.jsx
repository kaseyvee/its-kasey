import company, { data } from "../data";
import ValueList from "../components/ValueList";
import Divider from "../components/Divider";

function WhyCompany() {
  const values = data.whyCompany;

  return (
    <section aria-labelledby="header" id="company" className="why-company container">
      <Divider position="top" colour="yellow"/>
      <div className="wrapper">
        <h2 id="header">Why {company}?</h2>
        <ValueList values={values} />
      </div>
    </section>
  );
}

export default WhyCompany;