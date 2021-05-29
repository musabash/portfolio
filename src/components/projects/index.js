import React from 'react'
import { ProjectLink } from '..'

const projects = [
  {
    id: 0,
    ss: "/images/blogXL.png",
    alt: "",
    link: "https://musabash.github.io/blogXL/",
    github: "https://github.com/musabash/blogXL",
    readme: [
      "Blogging and publishing app",
      "React functional components and hooks",
      "React Router, Compound components",
      "Firebase Authentication, Firestore,Firebase Storage"
]
  },
  {
    id: 1,
    ss: "/images/currency-converter.jpeg",
    alt: "currency conversion web app",
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
    ss: "/images/my-list.png",
    alt: "A bit more than a todo list app",
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
    ss: "/images/movie-search.png",
    alt: "movie searh web app",
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
    ss: "/images/my-notes.png",
    alt: "",
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
    ss: "/images/portfolio-06.jpg",
    alt: "",
    link: "",
    github: "",
    readme: []
  }
]

export default function Projects() {
  return (
    <div className="tab-content">
      <section className="my-work">
        <div className="portfolio">
          {projects.map(project => (
            <ProjectLink key={project.id} project={project}/>  
          ))}       
        </div>
      </section>
    </div>
  )
}