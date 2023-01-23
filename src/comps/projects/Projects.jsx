import React, { useState } from "react";
import { Uidb } from "..";
import "./projects.css";
import uidb2 from "../../assets/ui-db2.png";
import simpledb from "../../assets/simple-db.png";
import bl from "../../assets/bl1.png";
import interior1 from "../../assets/interior1.png";
import boldo1 from "../../assets/boldo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Bl from "../modals/Bl";
import Interior from "../modals/Interior";
import Boldo from "../modals/Boldo";
import { motion } from "framer-motion";

const Projects = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);

  return (
    <div className="projects">
      <motion.div
        className="projects-title"
        initial={{ x: 70, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.9 }}
      >
        <p>PROJECTS</p>
        <h1>My Sample Projects</h1>
      </motion.div>
      <div className="projects-modals">
        <div className="projects-modals-uidb">
          <img src={uidb2} alt="" onClick={() => setOpenModal1(true)} />
          <h1>
            UI Dashboard &nbsp;&nbsp;
            <a style={{color: 'white'}} target="_blank"
            href="https://complex-ui-dashboard-using-react.vercel.app/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
          </h1>
          <p>A complex ui dashboard with login and sign up features.</p>
          <Uidb open={openModal1} onClose={() => setOpenModal1(false)} />
        </div>

        <div className="projects-modals-simpledb">
          <img src={simpledb} alt="" />
          <h1>
            Simple UI Dashboard &nbsp;&nbsp;
            <a style={{color: 'white'}} target="_blank"
            href="https://simple-ui-dashboard-using-react.vercel.app/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
          </h1>
          <p>A simple ui dashboard that is great for small business.</p>
        </div>

        <div className="projects-modals-bl">
          <img src={bl} alt="" onClick={() => setOpenModal2(true)} />
          <h1>
            Bucket List &nbsp;&nbsp;
            <a style={{color: 'white'}} target="_blank"
            href="https://bucket-list-app-seven.vercel.app/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
          </h1>
          <p>A simple Todo like app with basic CRUD functionalities.</p>
          <Bl open={openModal2} onClose={() => setOpenModal2(false)} />
        </div>

        <div className="projects-modals-interior">
          <img src={interior1} alt="" onClick={() => setOpenModal3(true)} />
          <h1>
            Dananz Interior Design &nbsp;&nbsp;
            <a style={{color: 'white'}} target="_blank"
            href="https://interior-design-landingpage-using-reactvite.vercel.app/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
          </h1>
          <p>
            This project is a landing page that features interior designs and
            with a few animations using framer motion.
          </p>
          <Interior open={openModal3} onClose={() => setOpenModal3(false)} />
        </div>

        <div className="projects-modals-boldo">
          <img src={boldo1} alt="" onClick={() => setOpenModal4(true)} />
          <h1>
            Boldo Template &nbsp;&nbsp;
            <a style={{color: 'white'}} target="_blank"
            href="https://boldo-landingpage-using-react.vercel.app/"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
          </h1>
          <p>A simple landing page.</p>
          <Boldo open={openModal4} onClose={() => setOpenModal4(false)} />
        </div>
      </div>
      <div className="projects-mentor">
        <p>
          I'm also taking coding challenges in Frontend Mentor, you can visit my
          profile and see some of my works. &nbsp;&nbsp;
          <a
            style={{ color: "white" }}
            target="_blank"
            href="https://www.frontendmentor.io/profile/anielrussel"
          >
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              style={{ cursor: "pointer" }}
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
