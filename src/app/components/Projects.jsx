import React from "react";
import Card from "./Card";
const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-7xl font-black text-center mb-12" id="projects">My Projects</h1>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Card
              image="anonalyze.png"
              title="AnonAlyze"
              getBadge={true}
              badge="🏆 Best Secruity Hack"
              subtitle= "CTRL+HACK+DEL Hackathon"
              descr="Created a full-stack web app leveraging OpenAI and Apify APIs to evaluate social media profiles, delivering a safety score and actionable insights to strengthen online security."
              tag1="JavaScript"
              tag2 = "HTML/CSS"
            />
          </div>
          <div>
          <Card
              image="novelnovels.png"
              title="Novel Novels"
              subtitle="Hack the North Hackathon"
              descr="Created a full-stack web app leveraging OpenAI and Apify APIs to evaluate social media profiles, delivering a safety score and actionable insights to strengthen online security."
              tag1="JavaScript"
              tag2 = "HTML/CSS"
            />
          </div>
          <div>
          <Card
              image="metroapocalypse.png"
              title="Metro Apocalypse"
              getBadge={true}
              badge="Top 5 on Modd.io"
              subtitle=".io Game hosted on Modd.io "
              descr="Created a full-stack web app leveraging OpenAI and Apify APIs to evaluate social media profiles, delivering a safety score and actionable insights to strengthen online security."
              tag1="JavaScript"
              tag2 = "HTML/CSS"
            />          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
