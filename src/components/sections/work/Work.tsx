import { works } from "@constant/constant";
import WorkCard from "./workCard/WorkCard";

function Work() {
  const renderWorks = works.map(({ imgSrc, title, tags, projectLink }, key) => (
    <WorkCard
    key={key}
      imgSrc={imgSrc}
      title={title}
      tags={tags}
      projectLink={projectLink}
      className="reveal-up"
    />
  ));

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio highlights</h2>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {renderWorks}
        </div>
      </div>
    </section>
  );
}

export default Work;
