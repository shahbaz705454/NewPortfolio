import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[500px] relative overflow-hidden ">
        <SkillsText></SkillsText>

        <div className=" bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkills></AllSkills>
        </div>
        <div className="sm:block lg:hidden">
            <AllSkillsSM></AllSkillsSM>
        </div>
      </div>
    </div>
  );
};
 
export default SkillsMain;
