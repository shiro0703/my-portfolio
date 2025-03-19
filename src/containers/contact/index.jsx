import { motion } from "framer-motion";
import PageHeader from "../../components/pageHeader";
import { RiContactsFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./styles.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ybq1uy",
        "template_2nlxg4h",
        form.current,
        "folgrNetXi3nR1WTh"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("Failed to send message. Check the console for details.");
      });
  };
  return (
    <section id="contact" className="contact">
      <PageHeader headerText="Contact Me" icon={<RiContactsFill size={30} />} />
      <div className="contact-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="contact-content-headerText">Get In Touch With Me!</h3>
          <form
            ref={form}
            className="contact-content-form"
            onSubmit={sendEmail}
          >
            <div className="contact-content-form-inputWrapper">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="nameInput"
                  required
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  type="email"
                  name="email_form"
                  id="emailForm"
                  className="emailInput"
                  placeholder=" "
                  required
                />
                <label htmlFor="emailForm" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  rows="5"
                  className="messageInput"
                  required
                ></textarea>
                <label htmlFor="message" className="messageLabel">
                  Message
                </label>
              </div>
            </div>

            <button className="contact-content-form-button" type="submit">
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
