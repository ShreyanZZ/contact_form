
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bls3os7', 'template_ugfujtd', form.current, 'qgbK9ZEfoVryzE7eJ')
      .then((result) => {
          console.log(result.text);
          alert('Thanks for contacting us, we will get back to you soon!');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="container" ref={form} onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <div className="name block">
          <div className="email block" >
         
           <input
              className='x'
              id="frm-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder='Your Email'
              
            />
          </div>
          <div className="block phone">
         
            <input
            className='y'
              id="frm-phone"
              type="text"
              name="phone"
              autoComplete="tel"
              required
              placeholder='Your Phone number'
            />
          </div>
          </div>
          <div className="name block">
            <div>
              <input
              className='z'
                id="frm-first"
                type="text"
                name="name"
                autoComplete="given-name"
                required
                placeholder='Your Name'
              />
            </div>
            <div>
              <input
              className='a'
                id="frm-comp"
                type="text"
                name="comp"
                autoComplete="company-name"
                required
                placeholder='Company Name'
              />
            </div>
          </div>
          <div className="block phone">
            <textarea  className='k' id="frm-desg" rows="6" name="desg" required placeholder='Your Designation'></textarea>
          </div>
          <div className="message block">
       
            <textarea  className='b' id="frm-message" rows="6" name="message" placeholder='Enter your message'></textarea>
          </div>
          <div className="button block">
            <button type="submit">SEND</button>
          </div>
        </form>
  );
}
