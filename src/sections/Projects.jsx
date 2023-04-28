import Divider from "../components/Divider";

function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects" className="projects | container">
      <Divider position="top" colour="black" />
      <div className="wrapper">
        <h2 id="projects-title">Some things I&apos;ve made</h2>

        <div className="projects_card">
          <div className="projects_card_images">
            <img src="src/assets/projects/manage-1.png" alt="" className="projects_card_images_main" />
            <img src="src/assets/projects/manage-2.png" alt="" className="projects_card_images_alt" />
          </div>

          <div className="projects_card_info">
            <header>
              <h3>Manage Landing Page</h3>

              <div className="project-links">
                <span><a href="">Demo</a> | <a href="">Repo</a></span>
              </div>
            </header>

            <p>This landing page was built using React, Sass, and Framer Motion, with a mobile-first workflow and web accessibility in mind. Web accessibility was a key consideration in the development process, making sure the landing page is inclusive and can be accessed by everyone.</p>
          </div>
        </div>

        <div className="projects_carousel-nav">

        </div>
      </div>
    </section>
  );
}

export default Projects;