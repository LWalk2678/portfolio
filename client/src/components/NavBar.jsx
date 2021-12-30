import { Link, NavLink } from "react-router-dom"
import '../assets/css/components/NavBar.css'

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink className="nav navend" to="/">HOME</NavLink>
        <NavLink className="nav" to="/portfolio">PORTFOLIO</NavLink>
        <Link className="nav" to="/about">ABOUT</Link>
        <Link className="nav" to="/resume">RESUME</Link>
        <Link className="nav navend" to="/contact">CONTACT</Link>
      </nav>
    </div>
  )
}
