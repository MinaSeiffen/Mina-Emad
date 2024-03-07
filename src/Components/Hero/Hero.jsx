import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x:0,
    opacity:1,
    transition:{
        duration:1,
        staggerChildren:0.1,
    },
  },
  scrolling:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat:Infinity,
    }
  }
};
const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x:"-200%",
    transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Mina Emad</motion.h2>
          <motion.h1 variants={textVariants}>Web developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants} ><a href="#Portfolio">See latest works</a></motion.button>
            <motion.button variants={textVariants}><a href="#Contact">Contact Me</a></motion.button>
          </motion.div>
          <motion.img src="./scroll.png" variants={textVariants} animate="scrolling"/>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">Full Stack Developer</motion.div>
      <div className="imageContainer">
        <img src="./mina2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
