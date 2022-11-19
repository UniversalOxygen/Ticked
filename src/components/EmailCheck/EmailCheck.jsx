import React from 'react'
import './EmailCheck.css'
import Sms from './images/sms.png'

const EmailCheck = () => {
  return (
        <section id='EmailCon'>
            <div id='Emaildetails'>
                <div id='econtainer'>
                    <img id='Sms'  src={Sms} alt="Footer_Logo" />
                    <h1>Check your mail</h1>
                    <p id='email'>We have sent a verification code to <br />annadavid@gmail.com</p>
                    <button>Go to Email App  &nbsp; &#8594;</button>
                    <h6 id='code'>Resend verification code </h6>
                    <h6 id='help'>Contact help center </h6>
                    <p>Did you recieve the email? Check your spam filter <br /> or <em id='address'>try another email address</em></p>
                </div>
            </div>
            {/* <div id='displayCon'>
                <img id='Pimg'  src={Pimg} alt="Footer_Logo" />
            </div> */}
        </section>
  )
}

export default EmailCheck