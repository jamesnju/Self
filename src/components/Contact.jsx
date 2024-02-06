import React, {useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s0nml9g', 'template_uotl1dr', form.current, {
        publicKey: 'mWxQh7iFJkjkVIWOg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true);

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='container-fluid'>
      <div className="moving-text-container">
        <h4 className="moving-text text-success">Click the Send to Send an Email</h4>
      </div>
      <h2 className='text-center text-success'>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor=""><p>Name</p>
          <input type="text" name='user_name' maxLength='20' placeholder='Enter Your Name...' required/>
        </label>
        <label htmlFor=""><p>Email</p>
          <input type="text" name='user_email' placeholder='Enter Your email' required/>
        </label>
        <textarea name="message" placeholder='Enter the message....' id="" cols="30" rows="4" required></textarea>
        <input type='submit' value='Send' className='btnsend'/>
        <span className='text-success'>{sent && "Thanks for conctacting Me, are get in  Touch!"}</span>
      </form>
    </div>
  )
}

export default Contact