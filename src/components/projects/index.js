import React from 'react'
import { projects } from './projects'

export default function Projects() {
  return (
    <div className="tab-content">
      <section className="my-work">
          {projects.map(project => (
            <div key={project.id} className="portfolio">
              <h1 className="title">{project.name}: {project.readme[0]}</h1>
              <iframe 
                title={project.readme[0]}
                src={project.link}
                className="portfolio__item"
              />
            </div>
          ))}
      </section>
    </div>
  )
}