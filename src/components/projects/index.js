import React from 'react'
import { ProjectLink } from '..'

const projects = [
  {
    id: 0,
    ss: "/images/portfolio-04.jpg",
    alt: "",
    link: "",
    readme: [
      "Blogging and publishing app",
      "React functional components and hooks",
      "React Router",
      "Firebase Authentication",
      "Firebase Firestore (read, write, delete, edit)",
      "Firebase Storage to upload user profile picture",
      "Signup, Signin, Reset Password",
      "Bookmark, like and comment on other blogs",
      "Can edit but can't like own blog",
      "Dashboard shows likes, bookmarks, blogs and drafts",
      "Upload profile picture"
]
  },
  {
    id: 1,
    ss: "/images/currency-converter.jpeg",
    alt: "currency conversion web app",
    link: "https://musabash.github.io/currency-converter/",
    readme: [
      "currency-converter web app",
      "React functional components and hooks",
      "free.currencyconverterapi",
      "user typed currency filtered from the currency list",
      "allow no negative values"
    ]
  },
  {
    id: 2,
    ss: "/images/my-list.png",
    alt: "A kind of a todo list web app",
    link: "https://musabash.github.io/my-list/",
    readme: [
      "This is a kind of todo web app",
      "React functional components and hooks used",
      "store, edit, delete lists stored in localStorage"
    ]
  },
  {
    id: 3,
    ss: "/images/movie-search.png",
    alt: "movie searh web app",
    link: "https://musabash.github.io/movie-search/",
    readme: [
      "movie-search web app",
      "React Router",
      "React Functional components and hooks",
      "The Movie Database (TMDB) API",
      "Responsive design"
    ]
  },
  {
    id: 4,
    ss: "/images/my-notes.png",
    alt: "",
    link: "https://my-notess.netlify.app/",
    readme: [
      "A simple not taking web app",
      "Notes are stored in localStorage",
      "Material UI used",
      "React Router for routing",
      "react-masonry-css for grid view"
    ]
  },
  {
    id: 5,
    ss: "/images/portfolio-06.jpg",
    alt: "",
    link: "",
    readme: []
  }
]

export default function Projects() {
  return (
    <div className="tab-content">
      <section className="my-work">
        <div className="portfolio">
          {projects.map(project => (
            <ProjectLink key={project.id} project={project} />  
          ))}       
        </div>
      </section>
    </div>
  )
}