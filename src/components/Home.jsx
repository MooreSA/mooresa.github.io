/* eslint-disable quotes */
import React from "react";
import ProjectCard from "./ProjectCard";

const Home = () => {
  const projects = [
    {
      name: "Two Doo",
      url: "https://mooresa.github.io/two-doo",
      description:
        "App where users can create multiple projects to save todo lists",
    },
    {
      name: "BattleShip",
      url: "https://mooresa.github.io/odin-battleship",
      description: "Play against a computer in the classic game BattleShip",
    },
    {
      name: "CV Builder",
      url: "https://mooresa.github.io/cv-builder",
      description: "Create your own resume by filling in the CV-builder",
    },
    {
      name: "Memory Cards",
      url: "https://mooresa.github.io/odin-memory-card",
      description:
        "Test your memory by clicking on the cards. See if you can get them all",
    },
  ];

  return (
    <main className="home">
      <article className="intro">
        <h2 className="intro__header">Me.</h2>
        <div className="intro__content">
          <div className="intro__paragraph">
            Second Year IT Web Development Student at Nova Scotia&apos;s Truro
            Campus.
          </div>
          <div className="intro__paragraph">
            I believe in writing elegant, scalable, and documented code that is
            easy to maintain and understand.
          </div>
        </div>
      </article>
      <section className="projects">
        <h2 className="projects__header">My Work.</h2>
        <div className="projects__content">
          {projects.map((project) => (
            <ProjectCard projectInfo={project} key={project.name} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
