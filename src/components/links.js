import {FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from "react-icons/fa"

export default function Links() {
  return (
    <div className="icons">
      <a href="https://github.com/musabash"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/musa-bas-79605621a/"><FaLinkedin /></a>
      <a href="https://twitter.com/musabas_"><FaTwitter /></a>
      <a href="mailto:musa.bas@musabas.com"><FaEnvelope /></a>
    </div>
  )
}