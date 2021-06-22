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
      <p>I have a passion for what I do and will always be looking to learn and stay current with developments in relevant technologies.
      </p>
      <p>Strong support professional with a Bachelor's degree focused in Physics from Marmara University.
      </p>
      <p>5+ years of experience in information technology and services industry</p>
    </div>
  )
}