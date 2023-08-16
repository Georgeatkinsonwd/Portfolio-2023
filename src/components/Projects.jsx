import Project from './Project'
import reactLogo from '../images/react-logo.png'
import javascriptLogo from '../images/logo-javascript.png'
import '../styles/project.css'

function Projects() {
  return (
    <div className="projectsContainer">
        <Project img={reactLogo} title="Geogram - Social Media App" summary="Full front and backend social media app using the MERN stack with local authentication and authorization. Can be found live in the link below." projectLink="https://geogramx.netlify.app/" githubLink="https://github.com/Georgeatkinsonwd/geogram-frontend" />
        <Project img={javascriptLogo} title="Film Diary" summary="Full stack Film diary app with Google Authentication using Express, EJS, Mongodb and Passport. Due to IMDB API changing it is no longer live but screenshots can be found in the Github link" githubLink="https://github.com/Georgeatkinsonwd/google-auth-filmList" projectLink="https://github.com/Georgeatkinsonwd/google-auth-filmList" />
        <Project img={reactLogo} title="Art Portfolio" summary="Portfolio made for an art student that is fully responsive on desktop and mobile. Can be found live below" projectLink="https://laurajaneportfolio.netlify.app/" githubLink="https://github.com/Georgeatkinsonwd/Laura-Portfolio" />
    </div>
  )
}

export default Projects