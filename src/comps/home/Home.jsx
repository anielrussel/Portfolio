import React from "react";
import "./home.css";
import profile from "../../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.img
        src={profile}
        alt=""
        initial={{ y: -800 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 0.8 }}
      />
      <div className="home-info">
        <motion.div
          className="home-text"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 0.9 }}
        >
          <h1>RUSSEL M. ANIEL</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Front-End Developer", "Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p>
            Self-taught front-end developer and an aspiring full-stack developer
            with an eagerness to learn, dedication to explore more knowledge and
            skills in the software industry.
          </p>
        </motion.div>
        <div className="home-social">
          <motion.a
            target="_blank"
            href="https://web.facebook.com/profile.php?id=100009386101588"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1, delay: 1 }}
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="hvr-float"
              color="white"
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 12,
                paddingRight: 12,
                backgroundColor: "#636060",
                borderRadius: 5,
              }}
            />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://www.linkedin.com/in/russel-aniel-48353820b/"
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1, delay: 0.8 }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hvr-float"
              color="white"
              style={{
                padding: 10,
                backgroundColor: "#636060",
                borderRadius: 5,
              }}
            />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://github.com/anielrussel"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1, delay: 0.6 }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="hvr-float"
              color="white"
              style={{
                padding: 10,
                backgroundColor: "#636060",
                borderRadius: 5,
              }}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Home;
