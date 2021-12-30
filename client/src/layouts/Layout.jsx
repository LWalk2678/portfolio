import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function Layout({ children }) {

  return (
    <div className="layout">
      <NavBar />
      
        {children}
    
      <Footer />
    </div>
  )
}
