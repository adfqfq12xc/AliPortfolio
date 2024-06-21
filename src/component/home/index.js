import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Index() {
  const navigate = useNavigate();

  return (
    <section id='home' className='home'>
      <div className='homecontainer'>
        <h1>
          Hello, I'm Ali
          <br />
          Front End Developer
        </h1>
      </div>
      <div className='button'>
        <motion.button
          onClick={() => { navigate('/Contact'); }}
          initial={{y:'200vh'}}
          animate={{y:'0'}}
          transition={{ type:'spring', stiffness: 50 }}


        >
          Hire Me
        </motion.button>
      </div>
    </section>
  );
}
