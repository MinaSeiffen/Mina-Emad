import "./Navbar.scss"
import facebook from "/facebook.png"
import instagram from "/instagram.png"
import linkedin from "/linkedin.png"
import { motion } from "framer-motion";
import SideBar from "../SideBar/SideBar";

const Navbar = () => {
  return (
    <div className="navbar">
        <SideBar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:0.5}}>MERN DEV</motion.span>
            <div className="social">
                <a href=""><img src={facebook} alt="" /></a>
                <a href=""><img src={instagram} alt="" /></a>
                <a href=""><img src={linkedin} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar