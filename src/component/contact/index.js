import React from 'react';
import './styles.scss';
import Header from '../pageheadercomponenet';
import { BsInfoCircleFill } from 'react-icons/bs';

export default function Index() {
  return (
    <div>
      <Header prop={{ header: 'Contact Us', icon: <BsInfoCircleFill size={40} /> }} />

    </div>
  );
}
