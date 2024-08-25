import {FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from "react-icons/fa"

export default function Links() {
  return (
    <div className="icons">
      <a href="https://github.com/musabash" className="icon"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/musa-bas-79605621a/" className="icon"><FaLinkedin /></a>
      <a href="https://twitter.com/musabas_" className="icon"><FaTwitter /></a>
      <a href="mailto:musa.bas@musabas.com" className="icon"><FaEnvelope /></a>
    </div>
  )
}