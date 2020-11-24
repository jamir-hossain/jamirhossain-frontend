import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import worksData from '../../File/worksData';
import SingleWork from './SingleWork'

const Works = () => {
   const [works, setWorks] = useState(null)
   useEffect(() => {
      setWorks(worksData)
   }, [])
   console.log(works)

   const [descriptionCollapse, setDescriptionCollapse] = useState(true);
   // To Get ShowMore and ShowLess Button Operation
   const showMore = () => {
      setDescriptionCollapse(true);
   }
   const showLess = () => {
      setDescriptionCollapse(false);
   }
   const first6 = descriptionCollapse ? works && works.slice(0,6) : works && works
   console.log(first6)
   return (
      <div className="container my-5">

         <h1 className="my-md-3 mx-3 mx-sm-0 mx-md-0 mx-lg-0 py-3 Title text-white">My Works</h1>
         <div className="row pb-3">
         {
            first6 && first6.map(work => <div className="col-md-6 col-lg-4 mx-3 mx-sm-0 mx-md-0 mx-lg-0">
            <SingleWork 
            data={work}
            showLess={showLess}
            showMore={showMore}
            ></SingleWork></div>)
         }
         {
            descriptionCollapse && <Button onClick={() => showLess()} className='button resume m-auto' variant="outlined">Show More</Button>
         }
         </div>
      </div>
   );
};

export default Works;