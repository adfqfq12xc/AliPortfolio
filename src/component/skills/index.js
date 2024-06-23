import React, { useEffect, useState } from "react";
import "./styles.scss";
import Header from "../pageheadercomponenet";
import { GiSkills } from "react-icons/gi";
import { Line } from "rc-progress";
import { motion } from "framer-motion";
export default function Index() {
  const front = [
    { label: "Html", value: "100" },
    { label: "Css", value: "80" },
    { label: "Javascript", value: "80" },
    { label: "React", value: "80" },
    { label: "Angular", value: "60" },
  ];

  const back = [
    { label: "Java", value: "70" },
    { label: "Javascript", value: "80" },
    { label: "Php", value: "80" },
    { label: "C#", value: "80" },
  ];

  const databases = [
    { label: "SQL", value: "90" },
    { label: "MongoDb", value: "80" },
    { label: "Firebase", value: "70" },
    { label: "Postgre", value: "80" },
  ];

  // State to track if the viewport is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check viewport width on component mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    // Initial check
    checkIfMobile();

    // Listen for resize events
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Function to render skills using Framer Motion if not mobile
  const renderSkills = (skills) => {
    return skills.map((e) => (
      <motion.div
<<<<<<< HEAD

=======
      initial={{y: "100px"  }}
      whileInView={{y: 0,transition: {duration: 1,type: "spring",stiffness: 50}}}
>>>>>>> dcd7c007fd1e8add7726f43c5d56cd8b86d26aca
      className="func"
    >
        <p>{e.label}</p>
        <Line
          percent={parseInt(e.value)} // Ensure value is parsed as integer
          className="line"
          strokeColor="var(--maincolor)"
          strokeWidth={2}
        />
      </motion.div>
    ));
  };

  return (
    <div>
      <Header
        prop={{
          header: "My Skills",
          icon: <GiSkills size={40} />,
          id: "skills",
        }}
      />
      <div className="SkillsContainer">
        <div className="Skills1">
          <h1>Front End</h1>
          {isMobile ? (
            renderSkills(front)
          ) : (
            front.map((e) => (
              <motion.div
              initial={{x: "100px"  }}
              whileInView={{x: 0,transition: {duration: 1,type: "spring",stiffness: 50}}}
              className="func"
            >
                <p>{e.label}</p>
                <Line
                  percent={parseInt(e.value)} // Ensure value is parsed as integer
                  className="line"
                  strokeColor="var(--maincolor)"
                  strokeWidth={2}
                />
               </motion.div>
            ))
          )}
        </div>
        <div className="Skills2">
          <h1>Back End</h1>
          {isMobile ? (
            renderSkills(back)
          ) : (
            back.map((e) => (

              <motion.div
              initial={{x: "100px"  }}
              whileInView={{x: 0,transition: {duration: 1,type: "spring",stiffness: 50}}}
              className="func"
            >
            
                <p>{e.label}</p>
                <Line
                  percent={parseInt(e.value)} // Ensure value is parsed as integer
                  className="line"
                  strokeColor="var(--maincolor)"
                  strokeWidth={2}
                />
              </motion.div>
            ))
          )}
        </div>
        <div className="Skills3">
          <h1>Databases</h1>
          {isMobile ? (
            renderSkills(databases)
          ) : (
            databases.map((e) => (
              <motion.div
              initial={{x: "100px"  }}
              whileInView={{x: 0,transition: {duration: 1,type: "spring",stiffness: 50}}}
              className="func"
            >
                <p>{e.label}</p>
                <Line
                  percent={parseInt(e.value)} // Ensure value is parsed as integer
                  className="line"
                  strokeColor="var(--maincolor)"
                  strokeWidth={2}
                />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
