import React from "react";
import snakeGameImg from "../public/assets/projects/snakeGame.png";
import cryptoImg from "../public/assets/projects/crypto.png";
import shoppingCartImg from "../public/assets/projects/shoppingCart.png";
import weatherImg from "../public/assets/projects/weatherApp.png";
import taskmateImg from "../public/assets/projects/taskmate.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Cryptocurrency Tracker"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Snake Game"
            backgroundImg={snakeGameImg}
            projectUrl="/snakeGame"
          />
          <ProjectItem
            title="Shopping-Cart"
            backgroundImg={shoppingCartImg}
            projectUrl="/shoppingCart"
          />
          <ProjectItem
            title="Weather-App"
            backgroundImg={weatherImg}
            projectUrl="/weatherApp"
          />
          <ProjectItem
            title="Taskmate"
            backgroundImg={taskmateImg}
            projectUrl="/taskmate"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
