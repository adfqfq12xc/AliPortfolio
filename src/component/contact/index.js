import React from 'react';
import './styles.scss';
import Header from '../pageheadercomponenet';
import { BsInfoCircleFill } from 'react-icons/bs';

export default function Index() {
  const handler=()=>{

  }
  return (
    <div>
      <Header prop={{ header: 'Contact Us', icon: <BsInfoCircleFill size={40} /> }} />
      <div className='contact'>
      <h1>Lets Talk</h1>
      <form onSubmit={handler}>
      <div className='contactfirst'>
        <input type='text' placeholder='Name'/>
        <input type='Email' placeholder='Email'/>
      </div>
      <input className='inputtext' type='Text' placeholder='Type Your Message..'/>
      <button >Submit</button>

      </form>
      </div>

    </div>
  );
}
