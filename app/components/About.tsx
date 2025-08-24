import Image from "next/image";
import "./About.css";

export const About = () => {
  return (
    <div className="mb-40">
      <h2
        id="about"
        className="text-3xl font-bold sm:text-5xl dark:text-white mb-20 text-center tracking-wide"
      >
        About Me
      </h2>
      <div className="flex items-center justify-center gap-6">
        <div className="about-container flex flex-col items-center justify-center p-15 max-w-3xl rounded-3xl border-1 border-neutral-300">
          <div className="flex items-center justify-center gap-10">
            <Image
              src="/about-icon.svg"
              alt="About Icon"
              width={100}
              height={100}
            />
            <p className="text-left sm:text-lg sm:max-w-3xl">
              I am on a mission to channel my curiosity for technological
              advancement into creating and maintaining websites, web
              applications, and software that people can truly immerse
              themselves in and enjoy using.
            </p>
          </div>
        </div>

        <div className="experience-container flex flex-col items-center justify-center p-11 w-[25%] rounded-3xl border-1 border-neutral-300">
          <div className="experience-content flex flex-col items-center gap-3">
            <div className="flex items-center justify-center">
              <Image
                src="/experience-icon.svg"
                alt="Experience Icon"
                width={90}
                height={90}
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center sm:text-2xl font-normal">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
