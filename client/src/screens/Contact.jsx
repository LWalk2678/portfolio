import Layout from '../layouts/Layout'
import "../assets/css/screens/Contact.css";
import MailToButton from '../components/MailToButton';

export default function Contact() {
  return (
    <div className='contact-page'>
      <Layout>
        <h1 className='contact-title'>CONTACT ME</h1>
        <div className='contact-container'>
          <div className='form-text'>
            <p>
              Want to contact me? Fill out this form!
            </p>
            <p className="email">
                Or email me directly at 
                <MailToButton label="  LWalk2678@msn.com" mailto="mailto:lwalk2678@msn.com" className="mailto"/>
            </p>
          </div>
          <form action="https://getform.io/f/d4fce4b4-7428-49b9-962b-66c68cbac152" method="POST">
            <label htmlFor='name'> Name:</label>
              <input type='text' name='name' placeholder='Enter name'/>
            <br/>

            <label htmlFor='email'> Email: </label>
              <input type='text' name='email' placeholder='Enter Email Address:' />
            <br/>

            <label htmlFor='message'> Message:</label>
            <textarea name='message' rows='10' cols='50' placeholder='Enter Message:' />
            <br/>
            <input type='submit' className='submit-button'/>
          </form>
        </div>
      </Layout>
    </div>
  )
}
