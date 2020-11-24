import React from 'react';
import './SkillData.css'

const SkillData = (props) => {
   const {skillsName, skills} = props.Data

   return (
      <div className='my-3'>
         <h5 className='text-white Title'> {skillsName} </h5>
         <div className='skills-items-container ml-n3'>
         {
            skills.map(data => {
               return <div className='skills-item-container'>
                  <span> {data} </span>
               </div>
            }) 
         }
         </div>
      </div>
   );
};

export default SkillData;