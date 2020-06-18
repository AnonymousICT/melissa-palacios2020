import React from 'react';
import emailjs from 'emailjs-com'
import './stylesheets/contact.css'

export default function ContactForm () {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail','template_hqTfQKkA', e.target, 'user_oZ0kWhIZEIK9CRP39BT3l')
    .then((result)=>{
      alert('Your email has been sent')
    }, (error) => {
      console.log(error.text)
    })

    document.getElementById("contact").reset();
  }
  return (
    <div className="form-container">
      <form className='commission-form' id='contact'onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <label>Description</label>
        <textarea 
          name="description" 
          placeholder='A brief description of what you want. For example: Can you give me several logo designs for my youtube channel? Can you help me draw twitch icons?' 
          required
        />
        <label>Your Name</label>
        <input 
          placeholder='Average Joe' 
          name='name' 
          required
        />
        <label>Email</label>
        <input 
          placeholder='RealPerson@email.com'
          name='email'
          required
         />
        <input className='commission-form__button btn' type='submit' value='Send'/>
      </form>
    </div>
  )
}