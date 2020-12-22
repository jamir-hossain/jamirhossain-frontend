import React, { useEffect, useState } from 'react';
import worksData from '../../File/worksData';
import SingleWork from '../Works/SingleWork';
import Title from '../Title/Title';

const SomeWorks = () => {
   const [someWorks, setSomeWorks] = useState(null)

   useEffect(() => {
      setSomeWorks(worksData)
   }, [])
   const first3 = someWorks && someWorks.slice(0,3)

   const firstWord = 'Some of'
   const secondWord = 'My Works'
   const link = '/works'


   return (
      <div className='container'>
         <Title 
            firstWord={firstWord}
            secondWord={secondWord}
            link={link}
         ></Title>
         <div className='row'>
            {
               first3 && first3.map(work => <div className="col-md-6 col-lg-4 mx-3 mx-sm-0 mx-md-0 mx-lg-0">
               <SingleWork 
               data={work}
               ></SingleWork>
               </div>)
            }
         </div>
      </div>
   );
};

export default SomeWorks;