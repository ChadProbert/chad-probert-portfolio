import { MarqueeTop } from "./MarqueeTop";
import { MarqueeBottom } from "./MarqueeBottom";


export const Skills = () => {
  return (
    <div id="skills" className="mb-50">
      <h2 className="text-3xl font-bold sm:text-5xl var(--foreground) mb-20 text-center tracking-wide">Skills</h2>
      <MarqueeTop />
      <MarqueeBottom />
    </div>
  );
};