import PageHeader from "../../components/pageHeader";
import { FaBook } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { resumeData } from "./resumeData";
import "./styles.scss";
import { MdWork } from "react-icons/md";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeader headerText="My Resume" icon={<IoIosDocument size={30} />} />
      <div className="download-button-wrapper">
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button>View Resume</button>
        </a>
      </div>
      <div className="timeline">
        <div className="timeline-experience">
          <h3 className="timeline-experience-headerText">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {resumeData.experience.map((item) => (
              <VerticalTimelineElement
                className="timeline-experience-element"
                key={item.title}
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                  boxShadow: "0 3px 0 var(--yellow-theme-main-color)",
                  display: "flex",
                  alignItems: "center",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
                contentArrowStyle={{ display: "none" }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  <p>{item.description}</p>
                  <p>{item.date}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline-education">
          <h3 className="timeline-education-headerText">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {resumeData.education.map((item) => (
              <VerticalTimelineElement
                className="timeline-education-element"
                key={item.subTitle}
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                  boxShadow: "0 3px 0 var(--yellow-theme-main-color)",
                  display: "flex",
                  alignItems: "center",
                }}
                icon={<FaBook />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
                contentArrowStyle={{ display: "none" }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
