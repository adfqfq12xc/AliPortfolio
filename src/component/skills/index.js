import React from 'react';
import './styles.scss';
import Header from '../pageheadercomponenet';
import { GiSkills } from "react-icons/gi";
import { Line } from 'rc-progress';
export default function Index() {
  const front = [
    {
      label: "Html",
      value: "100"
    },
    {
      label: "Css",
      value: "80"
    },
    {
      label: "Javascript",
      value: "80"
    },
    {
      label: "React",
      value: "80"
    },

  ];

  const back = [
    {
      label: "Java",
      value: "70"
    },
    {
      label: "Javascript",
      value: "80"
    },
    {
      label: "Php",
      value: "80"
    },
    {
      label: "C#",
      value: "80"
    }
  ];

  const databases = [
    {
      label: "SQL",
      value: "90"
    },
    {
      label: "MongoDb",
      value: "80"
    },
    {
      label: "Firebase",
      value: "70"
    },
    {
      label: "Postgre",
      value: "80"
    }
  ];

  return (
    <div>
      <Header prop={{ header: 'My Skills', icon: <GiSkills size={40} /> }} />
      <div className='SkillsContainer'>
        <div className='Skills1'>
          <h1>Front End</h1>
          {
            front.map((e) => {
              return (
                <div className='func' key={e.label}>
                  <p>{e.label}</p>
                  <Line percent={e.value} className='line' strokeColor="var(--maincolor)" strokeWidth={2} />
                  </div>
              )
            })
          }
        </div>
        <div className='Skills2'>
          <h1>Back End</h1>
          {
            back.map((e) => {
              return (
                <div className='func' key={e.label}>
                  <p>{e.label}</p>
                  <Line percent={e.value} className='line' strokeColor="var(--maincolor)" strokeWidth={2} />
                </div>
              )
            })
          }
        </div>
        <div className='Skills3'>
          <h1>Databases</h1>
          {
            databases.map((e) => {
              return (
                <div className='func' key={e.label}>
                  <p>{e.label}</p>
                  <Line percent={e.value} className='line' strokeColor="var(--maincolor)" strokeWidth={2} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
