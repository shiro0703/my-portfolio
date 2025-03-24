import PageHeader from "../../components/pageHeader";
import { GiSkills } from "react-icons/gi";
import { skillsData } from "./skillsData";
import { motion } from "framer-motion";
import { Line } from "rc-progress";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h3 className="skills-content-wrapper-innerContent-categoryText">
                {category.label}
              </h3>
              <div>
                {category.data.map((item) => (
                  <div className="progressbar-wrapper" key={item.name}>
                    <p>{item.name}</p>
                    <div className="progressbar-line">
                      <Line
                        percent={item.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={"2"}
                        trailColor="var(--progressbar-trail-color)"
                        strokeLinecap="round"
                      ></Line>

                      <Tooltip
                        placement="top"
                        overlay={`${item.percentage}%`}
                        visible={true}
                        align={{
                          overflow: { adjustX: false, adjustY: false }, // Disable repositioning
                        }}
                      >
                        <div
                          className="tooltip"
                          style={{
                            left: `calc(${item.percentage}%)`,
                            transform: "translateX(-50%)",
                          }}
                        ></div>
                      </Tooltip>
                    </div>
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
