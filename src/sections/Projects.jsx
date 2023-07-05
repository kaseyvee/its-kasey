import { useState } from "react";
import { motion } from "framer-motion";

import { ReactComponent as ArrowLeft } from "../assets/icon-arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/icon-arrow-right.svg";

import { data } from "../helpers/data";

function Projects() {
  const projects = data.projects;
  const [current, setCurrent] = useState(0)

  const carouselButtons = projects.map(project => {
    function handleGetStyle() {
      if (current === projects.indexOf(project)) {
        return "#121311";
      }
    }

    const selected = handleGetStyle();
    const index = projects.indexOf(project);

    return (
      <button
        key={project.id + `123`}
        aria-label={`see project ${index + 1} out of ${projects.length}`}
        className="projects_carousel-nav_button-group_item"
        onClick={() => setCurrent(index)}
        style={selected ? {backgroundColor: `${selected}`} : {}}
      ></button>
    )
  })

  function handleRotateProject(direction) {
    if (direction === "next") {
      if (current === projects.length - 1) return setCurrent(0);
      return setCurrent(current + 1);
    }

    if (direction === "prev") {
      if (current === 0) return setCurrent(projects.length - 1);
      return setCurrent(current - 1);
    }
  }

  const variants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: [0, 1],
      y: [100, 0],
      transition: {
        duration: 1 
      }
    }
  }

  return (
    <section aria-labelledby="projects-title" id="projects" className="projects | container">
      <div className="wrapper">
        <h2 id="projects-title">Some things I&apos;ve made</h2>

        <motion.div
          className="projects_card"
          aria-label={`project ${current + 1} out of ${projects.length}`}
          style={projects[current].img2 ? { gap: "5rem" } : {}}
          viewport={{ once: true }}
          variants={variants}
          initial="hidden"
          whileInView="show"
        >
          <div className="projects_card_images">
            <img
              src={projects[current].img1}
              alt=""
              className="projects_card_images_main"
            />

            {projects[current].img2 &&
            <img
              src={projects[current].img2}
              alt=""
              className="projects_card_images_alt"
            />}
          </div>

          <div className="projects_card_info">
            <header>
              <h3>{projects[current].title}</h3>

              <div className="project-links">
                {projects[current].demo &&
                <span><a href={projects[current].demo} target="_blank" rel="noopener noreferrer">Demo</a> | </span>}

                <a
                  href={projects[current].repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </div>
            </header>

            <p>{projects[current].description}</p>
          </div>
        </motion.div>

        <div className="projects_carousel-nav">
          <button
            className="projects_carousel-nav_left"
            aria-label="See previous project"
            onClick={() => handleRotateProject("prev")}
          >
            <ArrowLeft />
          </button>

          <div className="projects_carousel-nav_button-group">
            {carouselButtons}
          </div>

          <button
            className="projects_carousel-nav_right"
            aria-label="See next project"
            onClick={() => handleRotateProject("next")}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;