import React, {useState} from 'react'
import { env } from './config';
import{ sendForm} from 'emailjs-com';

export default function ContactUs() {
  const [submitButtonText, setSubmitButtonText] = useState("Send")
  const [template, setTemplate] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  function sendEmail(e) {
    e.preventDefault();
    setSubmitButtonText("...sending")
    sendForm(env.serviceId, env.templateId, e.target, env.user)
      .then((result) => {
          console.log(result.text);
          setSubmitButtonText("Send")
      }, (error) => {
          console.log(error.text);
      })
      .then(() => setTemplate(
              {
          name: '',
          email: '',
          message: ''
        }
      ))
  }

  function handleChange(name, value) {
    setTemplate(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form
      className="contact-form"
      onSubmit={sendEmail}>
      <input
        type="hidden"
        name="contact_number"  
      />
      <label>Name
      
      </label>
      <input
        required
        onChange={(e) => handleChange("name", e.target.value)}
        type="text"
        name="user_name"
        value={template.name}
      />
      <label>Email</label>
      <input
        required
        onChange={(e) => handleChange("email", e.target.value)}
        type="email"
        name="user_email"
        value={template.email}
      />
      <label>Message<span> ({240 - template.message.length}chars)</span></label>
      <textarea
        maxLength="240"
        className={template.message.length > 220 && "input-warn"}
        required
        onChange={(e) => handleChange("message", e.target.value)}
        name="message"
        value={template.message}
      />
      {
        submitButtonText === "...sending" ?
        <p className="sending">...sending</p> : 
        <input 
          type="submit"
          value="Send"
        />
      }
    </form>
  );
}