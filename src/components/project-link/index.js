import Readme from '../readme'

export default function ProjectLink({project, picture}) {
  
  return (
    <div className="portfolio__item-container">
      <a href={project.link} className="portfolio__item">
        <img src={picture} alt={project.alt} className="portfolio__img"/>
        <Readme readme={project.readme} />
      </a>
      <a href={project.link} className="goto" >Go to page</a>
      <a href={project.github} className="goto">View code</a>
    </div>
  )      
}