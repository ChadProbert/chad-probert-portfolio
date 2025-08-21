import "./About.css";

export const About = () => {
  return (
    <div className="about-container flex flex-col items-center justify-center mx-auto p-10 max-w-5xl mb-20 rounded-2xl border-2 border-neutral-900">
      <h2
        id="about"
        className="text-3xl font-bold sm:text-5xl dark:text-white mb-8"
      >
        About
      </h2>
      <p className="text-center sm:text-lg sm:max-w-3xl">
        I am a results-driven, hard-working, and highly ambitious software
        developer with 3+ years of experience building full-stack, user-centric
        web applications. My core tech stack is the MERN stack, and I am
        constantly learning, testing and adapting to new technologies to stay up
        to date on more efficient and scalable solutions. I relentlessly pursue
        goals with a first-principles approach, focusing on performance, an
        intuitive user experience, followed by possibilities for automation. 🚀
      </p>
    </div>
  );
};
