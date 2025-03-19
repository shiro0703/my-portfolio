import "./styles.scss";
import TypingEffect from "../../components/utils/typingEffect";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home-text-wrapper">
        <h1>
          {/* <span className="line1">Hello, I'm Siow Wei Jun</span>
          <span className="line2">Front-End Developer</span> */}
          <TypingEffect
            lines={["Hello, I'm Siow Wei Jun", "Front-End Developer"]}
            speed={80}
          />
        </h1>
      </div>
      <Animate
        play={true}
        duration={1.5}
        delay={3.5}
        start={{ opacity: 0, transform: "translateY(50px)" }}
        end={{ opacity: 1, transform: "translateY(0)" }}
      >
        <div className="home-contact-me">
          <button onClick={handleNavigate}>Contact Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
