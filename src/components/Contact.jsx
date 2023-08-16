import '../styles/contact.css'


import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";



function Contact() {
  return (
    <div>
      <h3 id="contactTitle">Contact</h3>
      <div className="contactDetails">If you would like to contact me or are interested in working with me, please use one of the links below to get in contact.</div>
      <div className="contactLinks">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Georgeatkinsonwd"><FontAwesomeIcon icon={faGithub} className="aboutSocialIcon contactIcon" /></a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:georgeatkinsonwd@gmail.com"><FontAwesomeIcon icon={faMailBulk} className="aboutSocialIcon contactIcon" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Ackowd"><FontAwesomeIcon icon={faTwitter} className="aboutSocialIcon contactIcon" /></a>

      </div>

      </div>
  )
}

export default Contact