import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white text-start">
        I'm Mohd Shahbaz a web developer with a passion for learning and coding
        with hand-on experience in building full-stack web applications
        usingMongoDB, Express.js, React.js , and Node.js. Proficient in creating
        responsive UI with HTML,CSS andJavaScript. Strong in API integration,
        database management, and problem-solving. Eager tocontribute to
        collaborative teams and grow as developer.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex mt-10 hover:bg-orange transition-all duration-110 cursor-pointer ease-in-out md:self-start sm:self-center hover:text-cyan justify-center items-center">Projects</button>
    </div>
  );
};

export default AboutMeText;
