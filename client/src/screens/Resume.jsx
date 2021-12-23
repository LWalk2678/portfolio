import '../assets/css/screens/Resume.css'

export default function Resume() {
  return (
    <div className='resume-container'>
      <iframe className='resume' src="https://docs.google.com/document/d/1PCHSFyEKez4jTFxrCyFTCOf5NQSjuz_JUXMnVL8CqzI/preview" title='resume' width="650" height="600"></iframe>
      
      <br></br>

      <div className='button-container'>
              <a className='resume-button' rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/1PCHSFyEKez4jTFxrCyFTCOf5NQSjuz_JUXMnVL8CqzI/export?format=pdf'>DOWNLOAD PDF</a>
              <br></br>
            </div>

    </div>
  )
}