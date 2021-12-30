import { Link } from "react-router-dom";
import "../assets/css/screens/Home.css";
import Arrow from '../assets/images/arrow.png';
import Layout from '../layouts/Layout';
//import WordCarousel from '../../components/WordAnimation/WordAnimation';

function Home(props) {
  return (
    <Layout>
    <div className = "homepage">
      
        <div className="homepage-title">
          <h1 id="homepage-title">LANCE WALKER</h1>
          <h2 id="homepage-subtitle">JUNIOR SOFTWARE ENGINEER</h2>
        </div>
        {/* <div className="header-carousel-container">
          <WordCarousel />
        </div> */}
        <hr className="page-break"></hr>
        <div className="explore-container">
          <h3>EXPLORE MY WORK</h3>
          <Link to="/portfolio"> <button className="explore-button"><img id="explore-arrow" alt="arrow" src={Arrow} /></button></Link>
        </div>
      
    </div>
    </Layout>  
  );
}

export default Home;