import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  function sendEmail(e)  {
    e.preventDefault();

    emailjs.sendForm('service_q8y8sj7', 'template_p2842qc', e.target, 'H0N5CF56xLZk5N-gI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };


  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;