import '../styles/projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";


function Project({img, summary, title, projectLink, githubLink}) {
  return (
    <div className="projectContainer">
        <img className="langIcon" src={img} alt="langugage" />
        <h4 className="projectTitle">{title}</h4>
        <div className="projectSummary">{summary}</div>
        <a target="_blank" rel="noopener noreferrer" href={projectLink}>View Project</a>
        <a target="_blank" rel="noopener noreferrer" href={githubLink}><FontAwesomeIcon icon={faGithub} className="projectGh" /> </a>
        
    </div>
  )
}

export default Project