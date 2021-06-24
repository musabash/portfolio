import React from 'react'
import {FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from "react-icons/fa"

export default function About() {
  return (
    <div className="about">
      <div className="about_header">
        <h1 className="my_name">Musa <span>Bas</span></h1>
        <div className="icons">
          <a href="https://github.com/musabash"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/musa-bas-4984221bb/"><FaLinkedin /></a>
          <a href="https://twitter.com/musabas_"><FaTwitter /></a>
          <a href="mailto:devmusabas@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
      <p>I'm a self-taught front-end developer.</p>
      <p>I love building web apps and sites with <span>React JS</span>.</p>
      <p>I have a passion for coding. I always try to look to learn and stay current with developments in relevant technologies.
      </p>
      <p>I've built a strong professional background with a Bachelor's degree focused in Physics from Marmara University but my passion for coding made me chose this new career path. 5+ years of experience in <span>IT & services industry</span> is helping me a lot to adapt quickly to new technologies and to solidify my knowledge.</p>
    </div>
  )
}