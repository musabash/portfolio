import React, {useState} from 'react'
import Readme from '../readme'

export default function ProjectLink({project}) {
  const [show, setShow] = useState(false)
  
  return (
    <>
      <a onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} href={project.link} className="portfolio__item">
        <div style={{background: `url(${project.ss}) no-repeat`, backgroundSize: 'cover'}} className="portfolio__img">  
        </div>
      </a>
      {show && <Readme readme={project.readme} />}
    </>
  )      
}