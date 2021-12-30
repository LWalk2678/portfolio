import { Link } from "react-router-dom";
import "../assets/css/screens/Home.css";
import Arrow from '../assets/images/arrow.png';
import Layout from '../layouts/Layout';
//import WordCarousel from '../../components/WordAnimation/WordAnimation';

function Home(props) {
  return (
    <Layout>
    <div className = "homepage">
      
        <div className="homepage-main">
          <h1 className="homepage-name">LANCE WALKER</h1>
          <h2 className="homepage-title">JUNIOR SOFTWARE ENGINEER</h2>
        </div>
        {/* <div className="header-carousel-container">
          <WordCarousel />
        </div> */}
        <hr className="page-break"></hr>
        <div className="lower-container">
          <h3>EXPLORE MY WORK</h3>
          <Link to="/portfolio"><img className="arrow" alt="arrow" src={Arrow}/> </Link>
        </div>
      
    </div>
    </Layout>  
  );
}

export default Home;