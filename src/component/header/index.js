import React from 'react'
import './styles.scss'
export default function index(props) {
    const {headertext,icon}=props;
  return (
    <div className='header'>
        <h2>
            {headertext}
        </h2>
        <span>{icon}</span>

    </div>
  )
}
