import Layout from '../layouts/Layout'
import "../assets/css/screens/Portfolio.css";
import cooking from "../assets/images/cooking.jpeg"
import martini from "../assets/images/martini.jpeg"
import sunshine from "../assets/images/sunshine.jpeg"

export default function Portfolio() {
  return (
    <Layout>
      <div className='portfolio-page'>
        <h1 className='portfolio-title'>PORTFOLIO</h1>
        
        <div className='project-list'>
          <div className='project'>
            <h3>Dad's Dinner Ideas</h3>
            <img className='project-image' src={cooking} alt="cooking picture" />
            <p className='descritption'>
              Created with.....CSS, outside API.  Helping single dad's come up with ideas for dinner.
            </p>
            <a href='https://github.com/LWalk2678/Dads_Dinner_ideas' target='blank'><button className="git-link"> View Code</button></a>
            <a href='https://lwalk2678.github.io/Dads_Dinner_ideas/' target='blank'><button className="site-link">Visit Site</button> </a>
          </div>

          <div className='project'>
            <h3>Drink Buddy</h3>
            <img className='project-image' src={martini} alt="drink picture" />
            <p className='descritption'>
            A front-end app created with ReactJS and CSS.  Inspired by previous bartending at different locations and having an easy way to collaborate receipes so all drinks are made the same for the guests.
            </p>
            <a href='https://github.com/LWalk2678/drink-buddy' target='blank'><button className="git-link"> View Code</button></a>
            <a href='https://drink-buddy.netlify.app/' target='blank'><button className="site-link">Visit Site</button> </a>
          </div>

          <div className='project'>
            <h3>Dad's Dinner Ideas</h3>
            <img className='project-image' src={sunshine} alt="cooking picture" />
            <p className='descritption'>
            A full-stack app created with ReactJS, CSS, node.JS, Express, MongoDB as a group project with three classmates.  Made to show the possibilities of an online marketplace.  Made with smoothies for a bright and fun environment. 
            </p>
            <a href='https://github.com/LWalk2678/Project-3' target='blank'><button className="git-link"> View Code</button></a>
            <a href='https://sunshine-smoothies.netlify.app/' target='blank'><button className="site-link">Visit Site</button> </a>
          </div>
        </div>

      </div>
    </Layout>
  )
}
