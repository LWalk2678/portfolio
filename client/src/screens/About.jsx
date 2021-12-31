import Layout from '../layouts/Layout'
import "../assets/css/screens/About.css";
import LancePic from "../assets/images/LancePic.JPG"

export default function About() {
  return (
    <Layout>
      <div className='about-page'>
        <h1 className='about-title'>ABOUT ME</h1>
        <div className='about-content'>
          <div className='personal-picture'>
            <img alt='photo' className='photo' src={LancePic}/>
          </div>
          <div className='about-text'>
            <p>
            I am a dedicated software engineer with a vast background from sports management, law enforcement, and Real Estate.  These opportunities have taught me to be resilient and loyal to those I work with while being a constant learner and great problem-solver. 
            </p>
            <p>
            Born and raised in Colorado, I began my interest in computers at an early age.  I was often sought out to help friends and family resolve issues they had with their computers.  As a Police Officer in a small department, I was depended on researching new software and helping implement new technology as well as teach the other officers how to use it.
            </p>
            <p>
            I am excited to bring these skills and my passion of software engineering to finally have the career I always wanted.
            </p>
          </div>
        </div>
      </div>
    </Layout>
    
  )
}
