import '../styles/about.css'
import office from '../images/office.jpg'

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="aboutContainer">
        <div className="aboutLeft">
            <div id="aboutTitle">Hello, I'm George Atkinson, A Full-Stack Web Developer</div>
            <div className="aboutText">I am a full-stack developer with expertise in HTML,CSS, Javascript, Node.js and React. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I am passionate about constantly growing as a developer and creating high quality applications.</div>
            <div className="aboutSocials">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Georgeatkinsonwd"><FontAwesomeIcon icon={faGithub} className="aboutSocialIcon" /></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:georgeatkinsonwd@gmail.com"><FontAwesomeIcon icon={faMailBulk} className="aboutSocialIcon" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Ackowd"><FontAwesomeIcon icon={faTwitter} className="aboutSocialIcon" /></a>

            </div>
        </div>
        <div className="aboutRight">
            <div className="aboutImgCont">
            <div className="aboutImgWrapper">
            <img className="aboutImg" src={office} alt="office" />
            </div>
            </div>

        </div>
    </div>
  )
}

export default About