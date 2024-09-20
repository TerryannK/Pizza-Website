import React from 'react';
import pizzieZ from "../assets/pizzieZ.jpg";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className='contact'>
     <div className='leftSide' style={{backgroundImage:`url(${pizzieZ})`}}>

     </div>
     <div className='rightSide'>
<h1>Contact Us</h1>
<form id="contact-form" method='POST'>
<label htmlFor="name">Full Name</label>
<input name='name' placeholder='enter full name..' type='text' required/>
<label htmlFor="Email"> Email Address</label>
<input type="email" name='email' placeholder='enter email' required />
<label htmlFor="message">Message</label>
<textarea name='message' rows='10' placeholder='enter message' required></textarea>
<button type='submit'> Send</button>
</form>
     </div>
    </div>
  )
}

export default Contact
