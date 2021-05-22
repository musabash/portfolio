import React from 'react'
import {FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithubSquare, FaLinkedin, FaMedium, FaGit, FaReact} from "react-icons/fa"
import {SiFirebase} from "react-icons/si"

export default function Skills() {

  return (
    <div className='tab-content'>
      <FaJsSquare className="fav-icons" style={{color:"#f1ce06"}}/>
      <FaReact className="fav-icons" style={{color:"#18dbf5"}}/>
      <FaCss3Alt className="fav-icons" style={{color:"#2277ff"}}/>
      <FaHtml5 className="fav-icons" style={{color:"#f68646"}}/>
      <FaGit className="fav-icons" style={{color:"#f6865f"}}/>
      <FaGitAlt className="fav-icons" style={{color:"#fff"}}/>
      <SiFirebase className="fav-icons" style={{color:"#f1aa37"}}/>
    </div>
  )
}
