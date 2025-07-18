import me from "@assets/images/me.jpg";
import myCv from "@assets/pdf/CV_rida_khaoua_front-end.pdf";

import LinkHref from "@components/ui/anchor/LinkHref";
function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container  lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="hero_left">
          <div className="flex items-center gap-3 mb-8">
            <figure className="bg-zinc-700 overflow-hidden rounded-lg w-9 h-9">
              <img
                loading="lazy"
                src={me}
                alt="Rida Khaoua"
                className="img-cover w-18 h-12 mx-auto object-cover rounded-full"
              />
            </figure>
            <div className="flex items-center gap-1.5">
              <span className=" relative w-2 h-2 rounded-full bg-emerald-400 ">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className="text-gray-400">Available for Work.</span>
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] mb-8 lg:mb-10">
            Building Scalable Modern Website for The Future
          </h2>
          <div className="flex gap-3">
            <LinkHref
              className="btn btn-primary"
              label="Download cv"
              icon="download"
              href={myCv}
              download="My_CV"
              target="_blank"
            />
            <LinkHref
              className="btn btn-outline"
              label="scroll down"
              icon="arrow_downward"
              iconAniamte="animate-bounce"
              href="#about"
            />
          </div>
        </div>
        <div className="hero_right hidden  lg:block">
          <figure
            className="w-full max-w-[250px] ml-auto bg-gradient-to-t from-purple-400 via-25% via-purple-500/40 to-65% 
          rounded-[60px] overflow-hidden"
          >
            <img
              src={me}
              width={250}
              alt="Rida khaoua"
              className="rounded mx-auto  bg-zinc- object-cover rotate-2"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
