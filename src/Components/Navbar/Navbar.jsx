import "./Navbar.scss"
import facebook from "/facebook.png"
import instagram from "/instagram.png"
import linkedin from "/linkedin.png"
import github from "/github.png"
import { motion } from "framer-motion";
import SideBar from "../SideBar/SideBar";

const Navbar = () => {
  return (
    <div className="navbar">
        <SideBar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:0.5}}>MERN DEV</motion.span>
            <div className="social">
                <a href="https://web.facebook.com/monmon.201/"><img src={facebook} /></a>
                <a href="https://www.instagram.com/mina_e.adly/"><img src={instagram} /></a>
                <a href="https://www.linkedin.com/in/mina-seiffen/"><img src={linkedin} /></a>
                <a href="https://github.com/MinaSeiffen"><img src={github} /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar