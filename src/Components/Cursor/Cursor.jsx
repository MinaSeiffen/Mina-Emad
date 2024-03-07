import "./Cursor.scss"
import {motion} from "framer-motion"
import { useEffect, useState } from "react"

const Cursor = () => {
    const [postion , setPostion] = useState({x:0 , y:0})
    useEffect(()=>{
        const mouseMove = (e)=>{
            setPostion({x:e.clientX, y:e.clientY})
        }
        window.addEventListener("mousemove" , mouseMove)
        return ()=>{
            window.removeEventListener("mousemove" , mouseMove)
        }
    },[])

    return (
    <motion.div className="cursor" animate={{x:postion.x+15 , y:postion.y+15}}>

    </motion.div>
  )
}

export default Cursor