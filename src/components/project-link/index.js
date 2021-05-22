import React from 'react'
import Readme from '../readme'

export default function ProjectLink({image}) {
  return (
      <a href={image.link} className="portfolio__item">
      <div style={{background: `url(${image.ss}) no-repeat`, backgroundSize: 'cover'}} className="portfolio__img">  
      <Readme readme={image.readme}/></div>
      </a>
  )
}
