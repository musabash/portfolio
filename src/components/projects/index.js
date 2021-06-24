import React from 'react'
import Iframe from 'react-iframe'
import { projects } from './projects'

export default function Projects() {
  return (
    <div className="tab-content">
      <section className="my-work">
          {projects.map(project => (
            <div key={project.id} className="portfolio">
              <h1 className="title">{project.name}: {project.readme[0]}</h1>
              <Iframe url={project.link}
                width="450px"
                height="450px"
                id="myId"
                display="initial"
                className="portfolio__item"
                position="relative"/>
    
              <a href={project.link} className="goto" >Go to page</a>
              <a href={project.github} className="goto">View code</a>
            </div>
          ))}
      </section>
    </div>
  )
}