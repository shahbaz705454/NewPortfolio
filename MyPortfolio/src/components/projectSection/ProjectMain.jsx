import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [
    {
        name:"Edtech Learning Platform",
        year:"2025",
        align:"right",
        image:"../../images/website-img-1.jpg",
        link:"https://github.com/shahbaz705454/Learnify"
    },
      {
        name:"Portfolio Website",
        year:"2025",
        align:"left",
        image:"../../images/website-img-1.jpg",
        link:"https://github.com/shahbaz705454/NewPortfolio"
    },
      {
        name:"Cuberto-Smart-landing-Page",
        year:"2024",
        align:"right",
        image:"../../images/website-img-1.jpg",
        link:"https://github.com/shahbaz705454/Cuberto-Smart-Landing-Page-Advance"
    },
      {
        name:"Al Image Enhancer",
        year:"2024",
        align:"left",
        image:"../../images/website-img-1.jpg",
        link:"https://github.com/shahbaz705454/AI-ImageEnhancer"
    },
      {
        name:"Password Manager",
        year:"2024",
        align:"right",
        image:"../../images/website-img-1.jpg",
        link:"https://github.com/shahbaz705454/Password_Manager_MongoDb_React"
    },
      {
        name:"Employee management System",
        year:"2024",
        align:"left",
        image:"../../images/website-img-1.jpg",
        link:"https://github.com/shahbaz705454/Employee_User_ManagementSystem"
    },
]
const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText></ProjectText>
      <div className="flex flex-col gap-20 max-w-[900px] mt-12 mx-auto">
        {
            projects.map((item,index)=>{
                return <SingleProject key={index} project={item}></SingleProject>
            })
        }
      </div>
    </div>
  );
};

export default ProjectMain;
