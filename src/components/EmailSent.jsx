import React from 'react'
import Sms from '../components/images/sms.png'
import Pimg from '../components/images/passwordreset-img.png'

const EmailSent = () => {
  return (
        <section id='EmailCon'>
            <div id='Emaildetails'>
                <div id='econtainer'>
                    <img id='Sms'  src={Sms} alt="Footer_Logo" />
                    <h1>Check your mail</h1>
                    <h6>We have sent a verification code to <br />annadavid@gmail.com</h6>
                    <button>Go to Email App  &nbsp; &#8594;</button>
                    <p id='code'>Resend verification code </p>
                    <p>Did you recieve the email? Check your spam filter <br /> or <em>try another email address</em></p>
                </div>
            </div>
            <div id='displayCon'>
                <img id='Pimg'  src={Pimg} alt="Footer_Logo" />
            </div>
        </section>
  )
}

export default EmailSent