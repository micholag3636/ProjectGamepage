import React from 'react'
import "./contactForm.css"
import emailjs from "emailjs-com"

function contactForm() {



    function sendEmail(e) {
        e.preventDefault();
      
        emailjs.sendForm('service_u9omaob', 'template_tkw01j9', e.target, 'user_8evbgoOIH93mTSVY3NeG4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      
      }
    return (
        <div className="contacts-box">
            <div className="rounded-box">
        
         <form className="contact-form" onSubmit={sendEmail}>
             <img id="form-img" src="https://i.postimg.cc/B6xtGBSs/logo-color-padding-removebg-preview.png"></img>
  
      <div id="top-form" ></div>
      <input placeholder="Name" type="text" name="name" />
  
      <input placeholder="Email" type="email" name="email"/>
      <textarea  placeholder="Message" name="message" />
      <input id="button-send" type="submit" value="Send" />
    </form>
    </div>
    </div>
       
    )
}

export default contactForm
