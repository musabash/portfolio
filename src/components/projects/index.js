import React from 'react'
import { ProjectLink } from '..'
import {blogXL, currencyConverter, myList, movieSearch, myNotes, taxi} from '../../images'
import { projects } from './projects'

const pictures = [blogXL, currencyConverter, myList, movieSearch, myNotes, taxi]

export default function Projects() {
  return (
    <div className="tab-content">
      <section className="my-work">
        <div className="portfolio">
          {projects.map(project => (
            <ProjectLink
              key={project.id}
              project={project}
              picture={pictures[project.id]}
            />  
          ))}       
        </div>
      </section>
    </div>
  )
}