import "./About.scss"
import {motion} from "framer-motion"


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

const About = () => {
  return (
    <motion.div className="about" variants={variants} initial="initail" whileInView="animate">
        <motion.div className="container">
            <motion.h1 variants={variants} initial="initail" whileInView="animate">Hello, its me Mina Emad</motion.h1>
        </motion.div>
        <motion.div className="textContainer" variants={variants} initial="initail" whileInView="animate">
            <motion.p variants={variants} initial="initail" whileInView="animate">As a Biomedical Engineer graduate from El Shorouk Academy, I am embarking on an exciting journey into the world of MEARN Stack development. With a strong foundation in Biomedical Engineering, I have honed my skills at the intersection of technology and healthcare, paving the way for a seamless transition into web development.</motion.p>
            </motion.div>
    </motion.div>
  )
}

export default About