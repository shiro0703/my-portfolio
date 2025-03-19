import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name",
    value: "Siow Wei Jun",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Segamat, Johor",
  },
  {
    label: "Email",
    value: "weijun000703@gmail.com",
  },
  {
    label: "Contact No",
    value: "+6011-10703711",
  },
  {
    label: "LinkedIn",
    value: " www.linkedin.com/in/wei-junb425481a1",
  },
];

const jobSummary =
  " I'm Wei Jun, a fresh graduate with a Bachelor's degree in Computer Science with Honors, specializing in Network Engineering at the University Malaysia Sabah. My academic journey covered programming, networking, AI, and cybersecurity. Industrial training as a front-end developer led to my interest in web development, where I gained experience in creating responsive, user-friendly websites. I am looking for an opportunity to apply my skills and knowledge to contribute to a dynamic IT team.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={30} />} />
      <div className="about-content">
        <div className="about-content-personal">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h3>Summary</h3>
            <p>{jobSummary}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.75 }}
          >
            <h3 className="personalHeader">Personal Information</h3>
            <ul>
              {personalDetails.map((item) => (
                <li key={item.label}>
                  <span className="title">
                    <div className="title-wrapper">{item.label}</div>
                  </span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="about-content-services">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="about-content-services-innerContent">
              <div>
                <FaCode size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <SiHtml5 size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
