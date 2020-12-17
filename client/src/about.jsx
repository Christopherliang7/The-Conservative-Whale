import React from 'react';

function About() {
  return (
    <>
      <div className='about_container'>
        <h1 className='about_title'>About Us</h1>
        <img className='about_picture' src='https://orcawhalewatch.com/wp-content/uploads/2016/03/whale-watching.jpg' alt=''/>
        <p className='about_description'>At The Conservative Whale, we believe in the importance of conservation and the impacts it can have on our future. We bring quality sighting information by scientists and allow you to post your own as well. We hope this platform continues to build, cultivating a growing community of like-minded individuals and spreading awareness of conservation as a whole. </p>
      </div>
      <br></br>
      <div className='subscription'>
        <h2 className='subscription_title'>Subscribe to Our Newsletter</h2>
        <form className='subscription_form'>
          <input className='email_input' type='text' name='email' placeholder='Email Address'/>
          <input className='email_submit'type='submit'/>
        </form>
      </div>
    </>
  )
}

export default About;