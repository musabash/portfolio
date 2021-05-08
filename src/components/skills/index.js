import React from 'react'
import {FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithubSquare, FaLinkedin, FaMedium, FaGit, FaReact} from "react-icons/fa"
import {SiFirebase} from "react-icons/si"

export default function Skills() {

  return (
    <div className='tab-content'>
      <FaJsSquare className="blue" />
      <FaReact className="blue" />
      <FaCss3Alt className="blue" />
      <FaGit className="blue" />
      <FaGitAlt className="blue" />
      <SiFirebase className="blue" />
    </div>
  )
}
