import React, {useContext} from "react";
import "./Skills.scss";

import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

// TagBox component for displaying each skill as a tag
function TagBox({ skill }) {
  return <span className="skill-tag">{skill}</span>;
}

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  // Skill arrays
  const languages = [
    "Python", "Java", "C/C++", "JavaScript/TypeScript", "Go", "SQL", "HTML5/CSS3", "MySQL", "PostgreSQL", "MongoDB", "Pinecone", "Redis", "ElasticSearch"
  ];
  const frameworks = [
    "Django", "NodeJs", "Spring Boot", "FastAPI", "Kafka", "Machine Learning", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "LangChain", "React", "Next.js", "Redux", "TailwindCSS"
  ];
  const tools = [
    "Amazon Web Services", "Azure Cloud", "Google Cloud Platform", "Git", "Linux", "UNIX", "Docker", "Kubernetes", "Helm", "Logstash", "Kibana", "Grafana"
  ];

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              Skills
            </h1>
            <div className={isDark ? "dark-mode skills-list" : "skills-list"}>
              <h3>Languages & Databases</h3>
              <div className="skills-tags-container">
                {languages.map(skill => <TagBox key={skill} skill={skill} />)}
              </div>
              <h3>Frameworks & Technologies</h3>
              <div className="skills-tags-container">
                {frameworks.map(skill => <TagBox key={skill} skill={skill} />)}
              </div>
              <h3>Cloud & Tools</h3>
              <div className="skills-tags-container">
                {tools.map(skill => <TagBox key={skill} skill={skill} />)}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
