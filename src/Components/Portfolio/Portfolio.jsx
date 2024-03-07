import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "GitHub Clone",
    describe:
      "GitHub Clone built with the MERN stack, TailwindCSS, and the GitHub API",
    image: "https://i.ibb.co/Gccpcqw/3.jpg",
    url:"https://github-clone-using-mern.onrender.com"
  },
  {
    id: 2,
    title: "Real Time Chatting App",
    describe:
      "Tech Stack: MERN + Socket.io+ TailwindCSS + Daisy UI , Authentication & Authorization: Implemented with JWT for secure access. Real-Time Messaging: Powered by Socket.io for instant communication",
    image: "https://i.ibb.co/r426JJ1/2.jpg",
    url:"https://real-time-chat-dngl.onrender.com/login"
  },
  {
    id: 3,
    title: "E-commerce",
    describe:
      "With React.js,I crafted interactive and responsive user interfaces, ensuring an engaging shopping experience across devices. Leveraging Express.js, MongoDB and Node.js,I built a robust back-end infrastructure that facilitated seamless communication between the client-side and server-side components, enabling efficient data processing and management.",
    image: "https://i.ibb.co/hsns6Xv/1.jpg",
    url:"https://github.com/MinaSeiffen/Ecommerce"
  },
];

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.image} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.describe}</p>
              <a href={item.url}><button>{item.id === 3 ? "See Github Source" : "See Demo"}</button></a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
