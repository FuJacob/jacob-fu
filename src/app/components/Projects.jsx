import React from "react";
import Card from "./Card";
const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-16 min-h-screen">
        <h1 className="text-7xl font-black text-center">My Projects</h1>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Card
              image="anonalyze.png"
              title="AnonAlyze"
              getTag={true}
              tag="🏆 Best Secruity Hack"
              subtitle= "CTRL+HACK+DEL Hackathon"
              descr="Created a full-stack web app leveraging OpenAI and Apify APIs to evaluate social media profiles, delivering a safety score and actionable insights to strengthen online security."
            />
          </div>
          <div>
          <Card
              image="anonalyze.png"
              title="Novel Novels"
              subtitle="Hack the North Hackathon"
              descr="Created a full-stack web app leveraging OpenAI and Apify APIs to evaluate social media profiles, delivering a safety score and actionable insights to strengthen online security."
            />
          </div>
          <div>
          <Card
              image="anonalyze.png"
              title="Metro Apocalypse"
              getTag={true}
              tag="Top 5 most played games on Modd.io"
              subtitle=".io Game hosted on Modd.io "
              descr="Created a full-stack web app leveraging OpenAI and Apify APIs to evaluate social media profiles, delivering a safety score and actionable insights to strengthen online security."
            />          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
