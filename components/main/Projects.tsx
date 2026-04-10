import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Photo1.png"
          title="An academic website for administering tests "
          description="This website was developed by me and two others as part of a university graduation project. It is designed to administer exams while preventing cheating, using technology that blocks it"
          link="https://github.com/talhiislam/ExameWebsite.git"
        />
        <ProjectCard
          src="/Photo2.png"
          title="Search Job"
          description="This website is dedicated to logging requests from owners of different establishments who are seeking employees, and it also allows job seekers to view these requests and apply for the jobs they are interested in."
          link="https://github.com/talhiislam/Search-Job.git"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A portfolio website with a space theme, i buid it with Next.js and framer montion"
        />
        <ProjectCard
          src="/Photo3.png"
          title=" AI Lerning"
          description="This website is dedicated to generating reviews and exams with artificial intelligence, and it is designed to help students learn and prepare for their exams in an easy and effective way."
          link="https://ai-platform-frontend-gamma.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
