import '../styles/screenshots.css'
import artPortfolio from '../images/artPortfolio.png'
import googleAuth from '../images/googleAuth.png'
import smHome from '../images/smHome.png'
import smLogin from '../images/smLogin.png'

function Screenshots() {
  return (
    <div className="screenshotsContainer">
        <h3 id="screenshotsTitle">Previews</h3>
        <div className="screenshots">
          <img class="screenshotImg" src={artPortfolio} alt='screenshot' />
          <img class="screenshotImg" src={googleAuth} alt='screenshot' />
          <img class="screenshotImg" src={smHome} alt='screenshot' />
          <img class="screenshotImg" src={smLogin} alt='screenshot' />

        </div>
        </div>
  )
}

export default Screenshots