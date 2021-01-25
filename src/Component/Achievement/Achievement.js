import React from 'react';
import certificate from '../../images/jamir hossain certificate.png'
import './Achievement.css'
import Title from '../Title/Title';

const Achievement = () => {
   const achievement = ['https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611573982/projectImage/achivement/hv2qxkwxivmyaomnetjj.png', 'https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611573955/projectImage/achivement/ul5cvq7m9mxrbcvkkwia.png']

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
               {
                  achievement.map(img => <img className="img-fluid" src={img} alt=""/>)
               }
            </div>
            <div className="d-sm-block d-md-none emptyDiv"></div>
         </div>
      </div>
   );
};

export default Achievement;