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
          <a href="mailto:musa.bas@musabas.com"><FaEnvelope /></a>
        </div>
      </div>
      <p>I'm a front-end developer.</p>
      <p>I love building web apps and sites with <span>React JS</span>.</p>
      <p>I have a passion for coding. I always try to look to learn and stay current with developments in relevant technologies.
      </p>
    </div>
  )
}


