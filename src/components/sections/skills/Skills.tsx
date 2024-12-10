import React from "react";
import { skillItems } from "@constant/constant";
import SkillsCard from "./skillsCard/SkillsCard";

function Skills() {

    const renderSkills = skillItems.map(({imgSrc, label, desc},key) => (
        <SkillsCard
            key={key}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
        />
    ))

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use.</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 
        grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {renderSkills}
        </div>
      </div>
    </section>
  );
}

export default Skills;
