import company from "../data";

function NavItems() {
  return (
    <ul className="nav-items">
      <li><a href="#about">About me</a></li>
      <li><a href="#company">Why {company}?</a></li>
      <li><a href="#me">Why me?</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Toolkit</a></li>
      <li><a href="#contacts">Contacts</a></li>
    </ul>
  );
}

export default NavItems;