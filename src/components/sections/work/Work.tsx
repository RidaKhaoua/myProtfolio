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
    />
  ));

  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio highlights</h2>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {renderWorks}
        </div>
      </div>
    </section>
  );
}

export default Work;
