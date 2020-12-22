import React, { useState } from 'react';
import Profile from '../About/Profile';
import SkillData from './SkillData';
import skillsData from '../../File/skillsData';
import './Skills.css'
import Title from '../Title/Title';

const Skills = () => {
   const [skills, setSkills] = useState(skillsData)

   const firstWord = 'All of'
   const secondWord = 'My Skills'
   const buttonText = 'My Skills'

   return (
      <div className='container my-5'>
         <Title 
            firstWord={firstWord}
            secondWord={secondWord}
            buttonText={buttonText}
         >
         </Title>
         <div className='row'>
            <div className='col-md-5 py-5'>
               <Profile></Profile>
            </div>
            
            <div className='col-md-7 px-md-5 mx-3 mx-sm-0 mx-md-0 mx-lg-0'>
               {
                  skills.map(data => <SkillData Data={data}></SkillData>)
               }
            </div>
         </div>
      </div>
   );
};

export default Skills;