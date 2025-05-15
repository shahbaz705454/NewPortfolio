import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants"

const skills = [
  {
    skills: "HTML",
    icon: FaHtml5 ,
  },
  {
    skills: "CSS",
    icon: IoLogoCss3 ,
  },
  {
    skills: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skills: "React",
    icon: FaReact ,
  },
  {
    skills: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skills: "Java",
    icon: FaJava ,
  },
  {
    skills: "Redux",
    icon: TbBrandRedux,
  },
];

const AllSkillsSM = () => {
  return <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
    {
        skills.map((item,index)=>{
            return <motion.div
            variants={fadeIn('up',0.3)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{once:false,amount:0.7}}
            key={index} className="flex flex-col items-center" >
                <item.icon className="text-6xl text-orange"/>
                <p className="text-center mt-4 text-white">{item.skills}</p>
            </motion.div>

        })
    }
    </div>;
};

export default AllSkillsSM;
