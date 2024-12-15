import React from "react";

type TProps = {
  imgSrc: string;
  label: string;
  desc: string;
  classeName?: string;
};

function SkillsCard({ imgSrc, label, desc, classeName }: TProps) {
  return (
    <div
      className={`${classeName} flex items-center gap-3 ring-2 ring-inset 
    ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 
    transition-colors  group`}>
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 flex items-center justify-center
       group-hover:bg-zinc-900">
        <img src={imgSrc} alt={label} width={32} height={32} />
      </figure>
      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default SkillsCard;
