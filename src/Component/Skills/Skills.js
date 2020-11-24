import React from 'react';
import Profile from '../About/Profile';
import SkillData from './SkillData';
import './Skills.css'

const Skills = () => {
   let skills = [
      {skillsName:'Programming Language', skills:['JavaScript', 'Python']},
      {skillsName:'Web Frontend', skills:['HTML5', 'CSS3', 'SASS', 'Bootstrap', 'ReactJS', 'ReduxJS', 'MaterialUI']},
      {skillsName:'Web Backend', skills:['NodeJS', 'ExpressJS', 'REST API', 'MongoDB']},
      {skillsName:'Tools and Packages', skills:['Git', 'Create React App', 'EJS', 'NPM', 'VS Code',  'Chrome Dev  tool', 'Firebase', 'Netlify', 'Heroku']},
   ]
   return (
      <div className='container my-5'>
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