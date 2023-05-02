import { motion } from "framer-motion";
import { data } from "../helpers/data";
import staggeredContainer from "../helpers/animations";

function Skills() {
  const skills = data.skills;

  const skillItems = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: [100, 0],
      transition: {
        type: "spring",
        duration: 1
      }
    }
  }

  const skillsList = skills.map(skill => {

    const skillIcons = skill.items.map(item => {
      const parsedItem = item.replace(/[^a-zA-Z]+/g, '').toLowerCase();

      return (
        <div key={item} className="skills_list_item_icons_item">
          <img src={`skills/icon-${parsedItem}.svg`} alt={item} />
          <p className="tooltip" aria-hidden="true">{item}</p>
        </div>
      )
    })

    return (
      <motion.div
        key={skill.id}
        className="skills_list_item"
        variants={skillItems}
      >
        <h3>{skill.title}</h3>
        <div className="skills_list_item_icons">
          {skillIcons}
        </div>
      </motion.div>
    )
  })

  return (
    <section aria-labelledby="skills-title" id='skills' className='skills | container'>
      <div className='wrapper'>
        <h2 id="skills-title">Some tools I&apos;ve worked with</h2>

        <motion.div
          className="skills_list"
          variants={staggeredContainer}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
        >
          {skillsList}
        </motion.div>

        <div className="skills_also also">
          <p>and also</p>
          <img src="skills/icon-figma.svg" alt="Figma" />
          <p>:)</p>
          <p className="tooltip" aria-hidden="true">Figma</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;