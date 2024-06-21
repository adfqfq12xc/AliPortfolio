import React from "react";
import "./styles.scss";
import Header from "../pageheadercomponenet";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaDev, FaDatabase } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";
import { motion } from "framer-motion";

export default function Index() {
  const data = [
    {
      label: "Name",
      value: "Ali Kansoun",
    },
    {
      label: "Age",
      value: "22",
    },
    {
      label: "Adress",
      value: "Lebanon,Beirut",
    },
    {
      label: "Email",
      value: "ali.kansoun.1@outlook.com",
    },
  ];
  return (
    <div>
      <Header
        prop={{ header: "About us", icon: <BsInfoCircleFill size={40} /> }}
      />
      <div className="containerAbout">
        <div className="aboutcontent">
          <motion.div className="AboutFirst"
                 initial={{ x: '-100vw' }}
                 animate={{ x: 0 }}
                 transition={{ type: 'spring', stiffness: 50 }}
          
          >
            <h2>Web development</h2>
            <p>
              Hi, I'm Ali Kansoun I'm a passionate web developer with a love for
              creating innovative and user-friendly websites. With a degree in
              Computer Science from Lu, I have spent the past 3 years honing my
              skills in both front-end and back-end development. I thrive on
              transforming creative ideas into functional digital experiences
              and take pride in my ability to solve complex problems
              efficiently. My projects often focus on optimizing user experience
              and improving website performance, reflecting my commitment to
              excellence in every detail.
            </p>
          </motion.div>
          <motion.div className="Aboutsecond"
                 initial={{ y: '+100vw' }}
                 animate={{ y: 0 }}
                 transition={{ type: 'spring', stiffness: 50, duration:3 }}>
            <h2>Personal Information</h2>
            <div className="info">
              {data.map((e) => {
                return (
                  <div className="a1">
                    <h3>{e.label}</h3>
                    <p>{e.value}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        <motion.div className="leftbar"
        initial={{ x: '+100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        >
          <div className="servicewraper">
            <div>
              <FaDev size={60} color="var(--maincolor)" />{" "}
            </div>
            <div>
              <div>
                <DiAndroid size={60} color="var(--maincolor)" />{" "}
              </div>
            </div>
            <div>
              <div>
                <FaDatabase size={60} color="var(--maincolor)" />{" "}
              </div>
            </div>
            <div>
              <div>
                <DiApple size={60} color="var(--maincolor)" />{" "}
              </div>
            </div>
          </div>
        </motion.div >
      </div>
    </div>
  );
}
