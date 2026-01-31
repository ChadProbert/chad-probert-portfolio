import { MarqueeTop } from "./MarqueeTop";
import { MarqueeBottom } from "./MarqueeBottom";

export const Skills = () => {
  return (
    <div id="skills" className="mb-20 pt-8 sm:pt-12">
      <h2 className="mt-0 text-3xl font-medium sm:text-5xl var(--foreground) text-center tracking-wide">
        Skills
      </h2>
      <div className="mt-10 sm:mt-20">
        <MarqueeTop />
      </div>
      <MarqueeBottom />
    </div>
  );
};
