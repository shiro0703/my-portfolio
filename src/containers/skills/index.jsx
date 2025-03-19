import PageHeader from "../../components/pageHeader";
import { GiSkills } from "react-icons/gi";
import { skillsData } from "./skillsData";
import { motion } from "framer-motion";
import { Line } from "rc-progress";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader headerText="My Skills" icon={<GiSkills size={30} />} />
      <div className="skills-content-wrapper">
        {skillsData.map((category) => (
          <div
            className="skills-content-wrapper-innerContent"
            key={category.label}
          >
            <motion.div
              className="skills-content-wrapper-innerContent"
              key={category.label}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h3 className="skills-content-wrapper-innerContent-categoryText">
                {category.label}
              </h3>
              <div>
                {category.data.map((item) => (
                  <div className="progressbar-wrapper" key={item.name}>
                    <p>{item.name}</p>
                    <Line
                      percent={item.percentage}
                      strokeWidth="2"
                      strokeColor="var(--yellow-theme-main-color)"
                      trailWidth={"2"}
                      trailColor="#fff"
                      strokeLinecap="round"
                    ></Line>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
