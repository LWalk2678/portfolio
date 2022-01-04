import '../assets/css/screens/Resume.css'
import Layout from '../layouts/Layout'
import resume from '../assets/files/resume.pdf'

export default function Resume() {
  return (
    <Layout>
      <div className='resume-container'>
        <div>
          <iframe className='resume' src={resume} title='resume' width="650" height="600">
          </iframe>
          {/* <iframe className='resume' src='https://docs.google.com/document/d/e/2PACX-1vTEC_ORX8dy2_qBXHngk615l1JKXghscvYrR5ygl4ZmRNs-UASPXxnInHjuATo8GNx3z89Qdo0ToDDU/pub?embedded=true' title='resume' width="650" height="600">
          </iframe> */}
        </div>
      
        <div className='link-container'>Click 
          <a className='resume-link' rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/1PCHSFyEKez4jTFxrCyFTCOf5NQSjuz_JUXMnVL8CqzI/export?format=pdf'> HERE 
          </a>
          to Download a PDF Copy
        </div>
      </div>
    </Layout>
  )
}