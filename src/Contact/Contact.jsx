import React from 'react'
import './contact.css'
import {AiFillMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8zofd51', 'template_0pobskq', form.current, 'w9poUPXO33DDUFFF_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
    };
  return (
    <div>
        <section id="contact">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>

          <div className="container contact-container">
              <div className="contact-option">
                  <article className="option">
                      <div><AiFillMail/></div>
                      <h4>Email</h4>
                      <h5>minhnguyen19@augustana.edu</h5>
                      <a href="mailto:minhnguyen19@augustana.edu">Send a message</a>
                  </article>
                  <article className="option">
                      <div><BsMessenger/></div>
                      <h4>Messenger</h4>
                      <h5>Minh Nguyen</h5>
                      <a href="https://m.me/profile.php?id=100066819163512" target={"blank"}>Send a message</a>
                  </article>
                  <article className="option">
                      <div><BsLinkedin/></div>
                      <h4>Linkedin</h4>
                      <h5>Minh Nguyen</h5>
                      <a href="https://www.linkedin.com/in/minh-nguyen-818698256/" target={"blank"}>Send a message</a>
                  </article>
              </div>

              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" placeholder="Your Full Name" required name="name"/>
                  <input type="email" placeholder="Your Email" required name="email"/>
                  <textarea name="message" id="" rows="7" placeholder="Your Message" required></textarea>
                  <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
          </div>
      </section>
    </div>
  )
}

export default Contact