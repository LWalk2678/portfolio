import '../assets/css/screens/Resume.css'
import Layout from '../layouts/Layout'

export default function Resume() {
  return (
    <Layout>
      <div className='resume-container'>
        <div>
          <iframe className='resume' src="https://docs.google.com/document/d/1PCHSFyEKez4jTFxrCyFTCOf5NQSjuz_JUXMnVL8CqzI/preview" title='resume' width="650" height="600">
          </iframe>
        </div>
      
        <div className='link-container'>Click 
              <a className='resume-link' rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/1PCHSFyEKez4jTFxrCyFTCOf5NQSjuz_JUXMnVL8CqzI/export?format=pdf'> HERE</a> to Download a PDF Copy
        </div>
      </div>
    </Layout>
  )
}