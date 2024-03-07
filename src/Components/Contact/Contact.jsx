import { useRef, useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initail: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
    const formRef = useRef();
    const [error , setError] = useState(false)
    const [success , setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1aeo8ae", "template_r8hv8om", formRef.current, {
        publicKey: "3BXIf3n6Kp387-nnq",
      })
      .then(
        () => {
          setSuccess(true)
        },
        (error) => {
          setError(true)
          console.log(error)
        }
      );
  };


  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initail"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contact Me</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>minaseiffen@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Cairo , Egypt</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>(+20)100-527-4732</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phone"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-6.4 -6.4 44.80 44.80"
            xmlSpace="preserve"
            width="512px"
            height="512px"
            fill="#10de0d"
            stroke="#10de0d"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#ccccccc"
              strokeWidth="3.136"
            >
              {" "}
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    " .st0{fill:none;stroke:#d0b116;stroke-width:0.96;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#d0b116;stroke-width:0.96;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st2{fill:none;stroke:#d0b116;stroke-width:0.96;stroke-miterlimit:10;} ",
                }}
              />
              <path
                className="st0"
                d="M12.6,21.7c-0.3,0.3-0.6,0.7-0.8,1.1c-1.2-1-2.4-2.1-3.4-3.4c0.4-0.2,0.8-0.5,1.1-0.8c1.4-1.4,0.9-3.2-0.5-4.6 s-3.2-1.9-4.6-0.5s-1.6,4-0.5,5.6c2,3.1,5.1,6.1,8.2,8.2c1.7,1.1,4.2,0.9,5.6-0.5c1.4-1.4,0.9-3.2-0.5-4.6 C15.8,20.8,14.1,20.3,12.6,21.7z"
              />
              <path
                className="st0"
                d="M22,25.9c4.1-1.9,7-6.1,7-10.9c0-6.6-5.4-12-12-12C12.6,3,8.7,5.4,6.6,9"
              />
              <path
                className="st0"
                d="M13,11.9l0.4-0.4c0.7-0.7,1.8-0.7,2.5,0l0,0c0.7,0.7,0.7,1.8,0,2.5L13,17h4"
              />
              <polyline className="st0" points="22,15 19,15 23,11 23,18 " />
            </g>
            <g id="SVGRepo_iconCarrier">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    " .st0{fill:none;stroke:#d0b116;stroke-width:0.96;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#d0b116;stroke-width:0.96;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st2{fill:none;stroke:#d0b116;stroke-width:0.96;stroke-miterlimit:10;} ",
                }}
              />
              <path
                className="st0"
                d="M12.6,21.7c-0.3,0.3-0.6,0.7-0.8,1.1c-1.2-1-2.4-2.1-3.4-3.4c0.4-0.2,0.8-0.5,1.1-0.8c1.4-1.4,0.9-3.2-0.5-4.6 s-3.2-1.9-4.6-0.5s-1.6,4-0.5,5.6c2,3.1,5.1,6.1,8.2,8.2c1.7,1.1,4.2,0.9,5.6-0.5c1.4-1.4,0.9-3.2-0.5-4.6 C15.8,20.8,14.1,20.3,12.6,21.7z"
              />
              <path
                className="st0"
                d="M22,25.9c4.1-1.9,7-6.1,7-10.9c0-6.6-5.4-12-12-12C12.6,3,8.7,5.4,6.6,9"
              />
              <path
                className="st0"
                d="M13,11.9l0.4-0.4c0.7-0.7,1.8-0.7,2.5,0l0,0c0.7,0.7,0.7,1.8,0,2.5L13,17h4"
              />
              <polyline className="st0" points="22,15 19,15 23,11 23,18 " />{" "}
            </g>
          </svg>
        </motion.div>
        <motion.form
          action=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" placeholder="Name" required name="name"/>
          <input type="email" placeholder="Email" required name="email"/>
          <textarea rows="8" placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
