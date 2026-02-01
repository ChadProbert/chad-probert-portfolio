import { MarqueeTop } from "./MarqueeTop";
import { MarqueeBottom } from "./MarqueeBottom";

export const Skills = () => {
  return (
    <div id="skills">
      <h2 className="mt-0 text-balance text-3xl font-medium tracking-tight sm:text-5xl text-center">
        Skills
      </h2>
      <div className="mt-10 sm:mt-20">
        <MarqueeTop />
      </div>
      <MarqueeBottom />
    </div>
  );
};
