import React from 'react'
import { ProjectLink } from '..'
import {blogXL, currencyConverter, myList, movieSearch, myNotes, taxi} from '../../images'

const pictures = [blogXL, currencyConverter, myList, movieSearch, myNotes, taxi]
const projects = [
  {
    id: 0,
    alt: "",
    link: "https://musabash.github.io/blogXL/",
    github: "https://github.com/musabash/blogXL",
    readme: [
      "Blogging and publishing app",
      "React functional components and hooks",
      "React Router, Compound components",
      "Firebase Authentication, Firestore, Firebase Storage"
]
  },
  {
    id: 1,
    alt: "currency conversion web page picture",
    link: "https://musabash.github.io/currency-converter/",
    github: "https://github.com/musabash/currency-converter",
    readme: [
      "Currency converter web app",
      "React functional components and hooks",
      "free.currencyconverterapi"
    ]
  },
  {
    id: 2,
    alt: "My list web page picture",
    link: "https://musabash.github.io/my-list/",
    github: "https://github.com/musabash/my-list",
    readme: [
      "A bit more than a todo list app",
      "React functional components and hooks",
      "Local storage"
    ]
  },
  {
    id: 3,
    alt: "movie searh web page picture",
    link: "https://musabash.github.io/movie-search/",
    github: "https://github.com/musabash/movie-search",
    readme: [
      "Movie searching web app",
      "React Functional components and hooks, React Router",
      "The Movie Database (TMDB) API",
      "Responsive"
    ]
  },
  {
    id: 4,
    alt: "my notes app web page picture",
    link: "https://my-notess.netlify.app/",
    github: "https://github.com/musabash/MyNotes",
    readme: [
      "A note taking web app",
      "React Functional components and hooks, React Router",
      "Material UI, react-masonry-css, LocalStorage"
      
    ]
  },
  {
    id: 5,
    alt: "taxi fare estimator app",
    link: "https://musabash.github.io/taxi-fare-estimator/",
    github: "https://github.com/musabash/taxi-fare-estimator",
    readme: [
      "An imaginary taxi fare calculator",
      "Responsive",
      "Html, CSS an Javascript"
    ]
  }
]

export default function Projects() {
  return (
    <div className="tab-content">
      <section className="my-work">
        <div className="portfolio">
          {projects.map(project => (
            <ProjectLink key={project.id} project={project} picture={pictures[project.id]}/>  
          ))}       
        </div>
      </section>
    </div>
  )
}