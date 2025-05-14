import React from 'react'
import SingleExperiance from './SingleExperiance'
import { FaArrowRight } from "react-icons/fa";
const experiance =[
    {
        job:"Front-End Developer",
        company:"Alex Apps",
        date:"2022 - present",
        responsibilities:[
            "Implementing reusable components.",
            "Participating in large scale application.",
            "Generating new ideas for better user experience."
        ],


    },
     {
        job:"Java Developer",
        company:"Oracle",
        date:"2023 - present",
        responsibilities:[
            "Explainig and facilating web development concepts.",
            "Participating in large scale application.",
            "Generating new ideas for better user experience."
        ],
        

    },
     {
        job:"Full-Stack Developer",
        company:"mexo",
        date:"2024 - present",
        responsibilities:[
            "Implementing reusable components using javaScript.",
            "Making large scale web Applications.",
            "Generating new ideas for better user experience."
        ],
        

    }
]

const AllExperiance = () => {
  return (
    <div>
        {
            experiance.map((item,index)=>{
                return <>
                <SingleExperiance key={index} experiance={experiance}></SingleExperiance>
                {index != experiance.length }
                
                </>
            })
        }
    </div>
  )
}

export default AllExperiance