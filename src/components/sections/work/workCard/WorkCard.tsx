import LinkHref from "@components/ui/anchor/LinkHref";


type TProps = {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  className?: string
};

function WorkCard({ imgSrc, title, tags, projectLink, className }: TProps) {
  const renderTags = tags.map((tag, key) => (
    <span
      key={key}
      className="bg-zinc-50/5  text-zinc-400 rounded-lg p-1 text-xs h-8 flex items-center">
      {tag}
    </span>
  ));

  return (
    <div
      className={`${className} relative p-4 rounded-2xl bg-zinc-800
     hover:bg-zinc-700/50 active:bg-zinc-700/60 duration-300`}>
      <figure className="aspect-square rounded-lg mb-4">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full rounded object-cover object-top"
        />
      </figure>
      <div className=" flex  gap-4 justify-between">
        <div className="w-10/12">
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex gap-4 flex-wrap">{renderTags}</div>
        </div>

        <div
          className="w-11 h-11 cursor-pointer 
         bg-purple-600  flex items-center justify-center 
          rounded-lg ">
          <LinkHref
            href={projectLink}
            className="cursor-pointer flex items-center"
            target="_blank"
            icon="arrow_outward"
            >
           
          </LinkHref>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
