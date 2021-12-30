import "../assets/css/components/Footer.css"
import LinkedIn from "../assets/images/LinkedIn.png"
import GitHub64 from "../assets/images/GitHub64.png"

export default function Footer() {
  return (
    <div className="footer">
      <h4 className="footer-title">PROFILES: </h4>
      <div className="footer-icon-container">
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/lancewalkerco/"><img className="footer-icon" alt="linkedin" src={LinkedIn} /></a>
        <a rel="noreferrer" target="_blank" href="https://github.com/LWalk2678"><img className="footer-icon" alt="GitHub" src={GitHub64} /></a>
      </div>
    </div>
  )
}
