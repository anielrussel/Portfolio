import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { motion } from "framer-motion";

const Contact = () => {

  const [inputValue, setInputValue] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueMessage, setInputValueMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("Fill all the data needed")
      return 
    } 
    // Do something with the input value
    console.log(inputValue);

    if (!inputValueEmail) {
      alert("Fill all the data needed")
      return 
    }
    // Do something with the input value
    console.log(inputValueEmail);
    
    if (!inputValueMessage) {
      alert("Fill all the data needed")
      return 
    }
    // Do something with the input value
    console.log(inputValueMessage);

    emailjs
      .sendForm(
        "service_bcnj2rs",
        "template_3zhaxqa",
        form.current,
        "YS0H5tga0jKIefw9B"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Message has been sent!")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <motion.div
        className="contact-title"
        initial={{ x: 70, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.9 }}
      >
        <p>CONTACT</p>
        <h1>Get In Touch</h1>
      </motion.div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type={"text"}
          name="user_name"
          value={inputValue}
          placeholder="Your Name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type={"email"} name="user_email" value={inputValueEmail} placeholder="Your Email" onChange={(e) => setInputValueEmail(e.target.value)}/>
        <textarea name="message" value={inputValueMessage} placeholder="Message" onChange={(e) => setInputValueMessage(e.target.value)}/>
        <button value="Send">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
