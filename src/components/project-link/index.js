import Readme from '../readme'

export default function ProjectLink({project, picture, handleClick}) {
  
  return (
    <div className="portfolio__item-container" onClick={handleClick(project)}>
      <div className="portfolio__item">
        <img src={picture} alt={project.alt} className="portfolio__img"/>
        <Readme readme={project.readme} />
      </div>
      <a href={project.link} className="goto" target="_blank" rel="noreferrer">Go to page</a>
      <a href={project.github} className="goto" target="_blank" rel="noreferrer" >View code</a>
      <input type="button" className="goto" onClick={handleClick(project)} value="View here"/>
    </div>
  )      
}