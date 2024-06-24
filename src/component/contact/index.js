import React, { useRef } from 'react';
import './styles.scss';
import Header from '../pageheadercomponenet';
import { BsInfoCircleFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

export default function Index() {
  const form = useRef();
  const name=useRef()
  const email=useRef()
  const message=useRef()

  const handler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_h2h2p64', 'template_6qqxtfs', form.current, '1mQxxT21-e5EUjJnd')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
      name.current.value = "";
      email.current.value = "";
      message.current.value = "";
      
  };

  return (
    <div className='all'>
      <Header prop={{ header: 'Contact Me', icon: <BsInfoCircleFill size={40} />, id: "contact" }} />
      <div className='contact'>
        <h1>Lets Talk</h1>
        <form onSubmit={handler} ref={form}>
          <div className='contactfirst'>
            <input type='text' placeholder='Name' name='from_name' ref={email} />
            <input type='email' placeholder='Email' name='from_email' ref={name}/>
          </div>
          <input className='inputtext' type='text' placeholder='Type Your Message..' name='from-message' ref={message} />
          <button className='contactbutton'>Submit</button>
        </form>
        <div className='footer'>
          <a href="https://www.linkedin.com/in/ali-kansoun-543094294/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" style={{ color: '#ffdd40' }}></i>
          </a>
          <a href="https://github.com/adfqfq12xc" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" style={{ color: '#ffdd40' }}></i>
          </a>
        </div>
      </div>
    </div>
  );
}
