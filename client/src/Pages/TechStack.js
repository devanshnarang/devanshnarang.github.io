import React from 'react';

const TechStack = () => {
  return (
    <div id="4">
      <h1 style={{ fontWeight: "bolder", marginTop: "100px", marginBottom: "0px", textAlign: "center", fontSize: "1.4rem", color: "rgb(6, 251, 6)" }}>SKILLS</h1>
      <div className="flex flex-wrap justify-center items-center lg:flex flex-row" style={{ marginTop: "0px", marginBottom: "10px" }}>
        <SkillCard imagePath="/images/html.png" title="HTML5" />
        <SkillCard imagePath="/images/css.png" title="CSS3" />
        <SkillCard imagePath="/images/javascript.png" title="JavaScript" />
        <SkillCard imagePath="/images/react.webp" title="ReactJs" />
        <SkillCard imagePath="/images/bootstrap.png" title="Bootstrap" />
        <SkillCard imagePath="/images/mysql.png" title="MySQL" />
        <SkillCard imagePath="/images/express.png" title="ExpressJs" />
        <SkillCard imagePath="/images/tailwind.png" title="Tailwind CSS" />
        <SkillCard imagePath="/images/git.png" title="Git" />
        <SkillCard imagePath="/images/github.jpeg" title="Github" />
        <SkillCard imagePath="/images/mongodb.png" title="MongoDB" />
        <SkillCard imagePath="/images/node.png" title="Node Js" />
        <SkillCard imagePath="/images/dsa.jpg" title="DSA" />
        <SkillCard imagePath="/images/cpp.png" title="C++" />
      </div>
    </div>
  )
}

const SkillCard = ({ imagePath, title }) => {
  return (
    <div className='flex flex-col items-center bg-emerald-300 border-3 border-white p-3 h-30 m-4' style={{ color: "white", width: "calc(20% - 16px)" }}>
      <img src={imagePath} style={{ height: "55px", width: "55px" }} alt={title} />
      <h2 className='text-sm md:text-base lg:text-xl' style={{ textAlign: "center"}}>{title}</h2>
    </div>
  );
}

export default TechStack;
