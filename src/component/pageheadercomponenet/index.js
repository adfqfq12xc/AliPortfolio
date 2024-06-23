import React from 'react';
import './styles.scss'
function Header({ prop }) {
  const { header, icon ,id} = prop;
  return (
    <div className='headercomponent' id={id}>
      <h1>{header}</h1>
      <span>{icon}</span>
    </div>
  );
}

export default Header;
