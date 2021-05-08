import React from 'react'
import { ProjectLink } from '..'

const imgs = [
  {
    ss: "/images/portfolio-04.jpg",
    alt: "",
    link: ""
  },
  {
    ss: "/images/currency-converter.jpeg",
    alt: "",
    link: "https://musabash.github.io/currency-converter/"
  },
  {
    ss: "/images/my-list.png",
    alt: "A kind of a todo list app",
    link: "https://musabash.github.io/my-list/"
  },
  {
    ss: "/images/movie-search.png",
    alt: "",
    link: ""
  },
  {
    ss: "/images/portfolio-05.jpg",
    alt: "",
    link: ""
  },
  {
    ss: "/images/portfolio-06.jpg",
    alt: "",
    link: ""
  }
]

export default function Projects() {
  return (
    <div className="tab-content">
      <section className="my-work">
        <div className="portfolio">
          {imgs.map(image => (
            <ProjectLink image={image} />  
          ))}       
        </div>
      </section>
    </div>
  )
}