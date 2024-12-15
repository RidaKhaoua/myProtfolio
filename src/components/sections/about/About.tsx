import { Logo } from "@components/ui";
import { aboutItems } from "@constant/constant";

function About() {
  const aboutInfo = aboutItems.map(({ label, number }, key) => (
    <div key={key}>
      <div className="flex items-center md:mb-2 ">
        <span className="text-2xl font-bold md:text-4xl">{number}</span>
        <span className="text-purple-500 font-semibold md:text-3xl">+</span>
      </div>
      <p className="text-sm text-zinc-400">{label}</p>
    </div>
  ));
  return (
    <section className="section" id="about_us" >
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-x md:max-w-[60ch]">
            I am a front-end developer who enjoys creating well-designed and
            responsive websites. I focus on making websites that look good and
            work well on all devices. I pay attention to details and always try
            to improve my work to deliver the best results. My goal is to build
            websites that are easy to use and meet the needs of users, combining
            good design with performance.
          </p>
          <div className="flex  items-center gap-4 md:gap-7">
            {aboutInfo}
            <div className="ml-auto">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
