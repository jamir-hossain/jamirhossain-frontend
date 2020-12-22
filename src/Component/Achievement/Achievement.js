import React from 'react';
import certificate from '../../images/jamir hossain certificate.png'
import './Achievement.css'
import Title from '../Title/Title';

const Achievement = () => {

   const firstWord = 'My '
   const secondWord = 'Achievement'
   const buttonText = 'Certificate'

   return (
      <div className="container">
         <Title 
            firstWord={firstWord}
            secondWord={secondWord}
            buttonText={buttonText}
         ></Title>
         <div className="row my-5">
            <div className="text-center mb-5">
               <img className="img-fluid" src={certificate} alt=""/>
            </div>
            <div className="d-sm-block d-md-none emptyDiv"></div>
         </div>
      </div>
   );
};

export default Achievement;