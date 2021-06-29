import React, {useState} from 'react'
import Iframe from 'react-iframe'
import { ProjectLink } from '..'
import {blogXL, currencyConverter, myList, movieSearch, myNotes, taxi} from '../../images'
import { projects } from './projects'

const pictures = [blogXL, currencyConverter, myList, movieSearch, myNotes, taxi]


export default function Projects() {
  const [isIframe, setIsIframe] = useState(false)
  const [framedProject, setFramedProject] = useState('')

  const handleClick = (project) => () => {
    setFramedProject(project)
    setIsIframe(true)
  }
  return (
    <div className="tab-content">
      {
        isIframe ?
        <section className="my-work">
          <input type="button" className="goto" onClick={() => setIsIframe(false)} value="Go back" />
          <div key={framedProject.id} className="portfolio__iframe">
            {/* <h1 className="title">{framedProject.name}: {framedProject.readme[0]}</h1> */}
            <Iframe url={framedProject.link}
              display="initial"
              className="portfolio__item__iframe"
            />
          </div>
        </section>
        :
        <section className="my-work">
          <div className="portfolio">
            {projects.map(project => (
              <ProjectLink
                key={project.id}
                project={project}
                handleClick={handleClick}
                picture={pictures[project.id]}
              />
            ))}       
          </div>
        </section>
      }
    </div>
  )
}