import React from 'react';
import './styles.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Index() {

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
          onClick={() => {  }}
          initial={{y:'200vh'}}
          animate={{y:'0'}}
          transition={{ type:'spring', stiffness: 50 }}


        >
          <Link to='contact'> Hire Me</Link>
        </motion.button>
      </div>
    </section>
  );
}
