import React from 'react'

export default function ProjectLink({image}) {
  return (
      <a href={image.link} className="portfolio__item">
      <img src={image.ss} alt={image.alt} className="portfolio__img"/>
      </a> 
  )
}
