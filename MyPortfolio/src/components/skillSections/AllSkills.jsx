import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import SingleSkills from "./SingleSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skills: "HTML",
    icon: <FaHtml5 />,
  },
  {
    skills: "CSS",
    icon: <IoLogoCss3 />,
  },
  {
    skills: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    skills: "React",
    icon: <FaReact />,
  },
  {
    skills: "TailwindCSS",
    icon: <RiTailwindCssFill />,
  },
  {
    skills: "Java",
    icon: <FaJava />,
  },
  {
    skills: "Redux",
    icon: <TbBrandRedux />,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', `0.${index}`)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0 }}
          >
            <SingleSkills
              text={item.skills}
              imgSvg={item.icon}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
