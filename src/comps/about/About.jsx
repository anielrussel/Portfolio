import React from "react";
import "./about.css";
import header from "../../assets/header.jpg";
import bootstrap from "../../assets/bootstrap.png";
import mui from "../../assets/mui.png";
import npm from "../../assets/npm.png";
import figma from "../../assets/figma.png";
import nextjs from "../../assets/nextjs.png";
import vscode from "../../assets/vscode.png";
import vite from "../../assets/vite.svg";
import java from "../../assets/java.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import seo from "../../assets/seo.webp";
import framer from "../../assets/framer.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { easeIn, motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <motion.div
        className="about-title"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.9 }}
      >
        <p>ABOUT</p>
        <h1>About Me</h1>
      </motion.div>
      <div className="about-header-image">
        <motion.img
          src={header}
          alt=""
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.9 }}
        />
      </div>
      <div className="about-name">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.9 }}
        >
          Russel M. Aniel
        </motion.h1>
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.9 }}
        >
          Front-End Developer
        </motion.span>
        <motion.p
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.9, delay: 0.2 }}
        >
          I began writing codes back when I was in Senior High School in the
          year 2018, that was my first interaction and the start of my journey
          in computer programming. VB.Net was the first programming language
          that I encountered, it doesn't go well for me that has no background
          in writing codes at that time. The "Hello World" things comes when I
          was taking my SHS work immersion(OJT), it was Notepad++ that I've been
          using that time and that was my first experience in front-end
          developing. It was God's plan for me to engaged in a software field
          because it was the passion that I have been looking when I was
          undecided what path to take in life.
        </motion.p>
      </div>
      <div className="about-goals">
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.9 }}
        >
          My Goals
        </motion.span>
        <motion.p
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.9, delay: 0.2 }}
        >
          One of my goals is to enhance further my skills, gain more knowledge
          and experience in front-end developing. Also to learn the backend is
          one of my goals and to become a full-stack developer when the time
          comes.
        </motion.p>
      </div>
      <div className="about-info">
        <div className="about-info1">
          <span>Birthdate:</span>
          <span>Age:</span>
          <span>Sex:</span>
          <span>Address:</span>
          <span>Email:</span>
          <span>Contact no.:</span>
        </div>
        <motion.div className="about-info2">
          <p>August 13, 1999</p>
          <p>23</p>
          <p>Male</p>
          <p>25 Sitio Lambak Brgy. Krus Na Ligas Quezon City, Philippines</p>
          <p>anielrussel13@gmail.com</p>
          <p>09456830673/GLOBE &nbsp;&nbsp;09099131902/TNT</p>
        </motion.div>
      </div>
      <div className="about-skills">
        <div className="about-skills-programming">
          <h1>Programming Skills</h1>
          <div className="about-html">
            <div className="html-text">
              <motion.p
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1.1 }}
              >
                HTML
              </motion.p>
              <p>95%</p>
            </div>
            <div className="html">
              <div className="html-inner"></div>
            </div>
          </div>

          <div className="about-css">
            <div className="css-text">
              <motion.p
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1.1, delay: 0.1 }}
              >
                CSS
              </motion.p>
              <p>90%</p>
            </div>
            <div className="css">
              <div className="css-inner"></div>
            </div>
          </div>

          <div className="about-js">
            <div className="js-text">
              <motion.p
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1.1, delay: 0.2 }}
              >
                Javascript
              </motion.p>
              <p>70%</p>
            </div>
            <div className="js">
              <div className="js-inner"></div>
            </div>
          </div>

          <div className="about-react">
            <div className="react-text">
              <motion.p
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1.1, delay: 0.3 }}
              >
                ReactJS
              </motion.p>
              <p>80%</p>
            </div>
            <div className="react">
              <div className="react-inner"></div>
            </div>
          </div>

          <div className="about-wp">
            <div className="wp-text">
              <motion.p
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1.1, delay: 0.4 }}
              >
                WordPress
              </motion.p>
              <p>50%</p>
            </div>
            <div className="wp">
              <div className="wp-inner"></div>
            </div>
          </div>
        </div>

        <div className="about-skills-language">
          <h1>Language Skills</h1>
          <div className="about-eng">
            <div className="eng-text">
              <motion.p
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1.1 }}
              >
                English
              </motion.p>
              <p>70%</p>
            </div>
            <div className="eng">
              <div className="eng-inner"></div>
            </div>
          </div>

          <div className="about-fil">
            <div className="fil-text">
              <motion.p
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 1.1, delay: 0.1 }}
              >
                Filipino
              </motion.p>
              <p>95%</p>
            </div>
            <div className="fil">
              <div className="fil-inner"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-other">
        <h1>Tools and other skills</h1>
        <motion.div
          className="about-other-image"
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1.1, delay: 0.1 }}
        >
          <img src={bootstrap} alt="" />
          <img src={mui} alt="" />
          <img src={npm} alt="" />
          <img src={figma} alt="" />
          <img src={vite} style={{ width: 70 }} alt="" />
          <img
            src={nextjs}
            style={{ width: 80, backgroundColor: "white", padding: 10 }}
            alt=""
          />
          <img src={vscode} alt="" />
          <img src={java} alt="" />
          <img src={git} alt="" />
          <img src={github} alt="" />
          <img src={seo} style={{ width: 100 }} alt="" />
          <img
            src={framer}
            style={{ width: 80, backgroundColor: "white", padding: 10 }}
            alt=""
          />
        </motion.div>
      </div>

      <div className="about-timeline">
        <div className="about-timeline-education">
          <h1>Education</h1>
          <VerticalTimeline lineColor="#C8C8C8">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#3d3c3c", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              date="2018-2023"
              style={{ color: "white" }}
            >
              <h3>
                Eulogio 'Amang' Rodriguez Institue of Science and Technology
              </h3>
              <h4>Nagtahan, Sampaloc, Manila</h4>
              <p>Bachelor of Science in Computer Engineering</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#3d3c3c", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              date="2016-2018"
              style={{ color: "white" }}
            >
              <h3>Krus Na Ligas High School (Senior High School)</h3>
              <h4>Quezon City</h4>
              <p>TVL track, ICT strand</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#3d3c3c", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              date="2012-2016"
              style={{ color: "white" }}
            >
              <h3>Don Quintin Paredes High School (Junior High School)</h3>
              <h4>Quezon City</h4>
              <p>Grade 7- 10</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#3d3c3c", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              date="2009-2012"
              style={{ color: "white" }}
            >
              <h3>Krus Na Ligas Elementary School</h3>
              <h4>Quezon City</h4>
              <p>Grade 3- 6</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#3d3c3c", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              date="2006-2009"
              style={{ color: "white" }}
            >
              <h3>Cawayan Primary School</h3>
              <h4>Irosin, Sorsogon</h4>
              <p>Kiner-Grade 2</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <div className="about-timeline1">
        <div className="about-timeline1-work">
          <h1>Internships</h1>
          <VerticalTimeline lineColor="#C8C8C8">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#3d3c3c", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faLaptopCode} />}
              date="September 05, 2022 – November 04, 2022"
              style={{ color: "white" }}
            >
              <h3>BRU Consumer Goods and Trading </h3>
              <h4>West Ave. Quezon City</h4>
              <p>Web Developer Intern</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#3d3c3c", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faLaptopCode} />}
              date="September 2017- January 2018"
              style={{ color: "white" }}
            >
              <h3>CSRC U.P Diliman</h3>
              <h4>U.P Diliman, Quezon City</h4>
              <p>Web Developer Intern</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default About;
