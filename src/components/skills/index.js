import React from 'react'
import {FaJsSquare, FaHtml5, FaCss3Alt, FaGithubSquare, FaGit, FaReact} from "react-icons/fa"
import {SiFirebase, SiMaterialUi, SiStyledComponents, SiAmazonaws, SiReactrouter} from "react-icons/si"
import { skills } from './skills'
import Table from './table'

export default function Skills() {
  return (
    <div className="skills">
      <Table />
      {/* <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul> */}
      <div className='tab-content animation'>
        <div className="floor"></div>
        <div className="cards">
          <FaJsSquare name="a" className="fav-icons" style={{color:"#f1ce06"}}/>
          <FaReact name="b" className="fav-icons" style={{color:"#18dbf5"}}/>
          <FaCss3Alt name="c" className="fav-icons" style={{color:"#2277ff"}}/>
          <FaHtml5 name="d" className="fav-icons" style={{color:"#f68646"}}/>
          <FaGit name="e" className="fav-icons" style={{color:"pink"}}/>
          <FaGithubSquare name="f" className="fav-icons" style={{color:"gray"}}/>
          <SiFirebase name="g" className="fav-icons" style={{color:"#f1aa37"}}/>
          <SiMaterialUi name="h" className="fav-icons" style={{color:"blue"}}/>
          <SiStyledComponents name="i" className="fav-icons" style={{color:"violet"}}/>
          <SiAmazonaws name="j" className="fav-icons" style={{color:"orange"}}/>
          <SiReactrouter name="k" className="fav-icons" style={{color:"brown"}}/>
        </div>
      </div>
    </div>
  )
}
