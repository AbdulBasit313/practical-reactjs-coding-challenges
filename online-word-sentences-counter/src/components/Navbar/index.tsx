import Linkedin from '../../assets/icons/linkedin.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Website from '../../assets/icons/website.svg'
import './index.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <span className="app-title">Text Analyser</span>
          <ul className="social-links">
            <li>
              <a href="https://basit.sh/" target="_blank" rel="noreferrer">
                <img src={Website} alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Basit_Miyanji" target="_blank" rel="noreferrer">
                <img src={Twitter} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdulbasitprofile/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Linkedin} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
