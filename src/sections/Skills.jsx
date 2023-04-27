import { data } from "../data";

function Skills() {
  const skills = data.skills;

  const skillsList = skills.map(skill => {

    const skillIcons = skill.items.map(item => {
      const parsedItem = item.replace(/[^a-zA-Z]+/g, '').toLowerCase();

      return (
        <img src={`/src/assets/skills/icon-${parsedItem}.svg`} alt={item} key={item} />
      )
    })

    return (
      <div key={skill.id} className="skills_list_item">
        <h3>{skill.title}</h3>
        <div className="skills_list_item_icons">
          {skillIcons}
        </div>
      </div>
    )
  })

  return (
    <section aria-labelledby="skills-title" id='skills' className='skills container'>
      <div className='wrapper'>
        <h2 id="skills-title">Some tools I&apos;ve worked with</h2>

        <div className="skills_list">
          {skillsList}
        </div>

        <div className="skills_also also">
          <p>and also</p>
          <img src="/src/assets/skills/icon-figma.svg" alt="Figma" />
          <p>:)</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;