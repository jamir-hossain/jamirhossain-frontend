import { Button, Fab } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import worksData from '../../File/worksData';
import SingleWork from './SingleWork'
import Title from '../Title/Title';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Works = React.forwardRef((props, ref) => {

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

   const firstWord = 'Some of'
   const secondWord = 'My Works'
   const buttonText = 'My Works'

   return (
      <div ref={ref} className="container my-5">
         <Title 
            firstWord={firstWord}
            secondWord={secondWord}
            buttonText={buttonText}
         ></Title>
         <div className="row pb-3 mt-3 pt-3">
         {
            first6 && first6.map(work => <div className="col-md-6 col-lg-4 mx-3 mx-sm-0 mx-md-0 mx-lg-0">
               <SingleWork 
                  data={work}
                  showLess={showLess}
                  showMore={showMore}
               ></SingleWork>
            </div>)
         }
         </div>
         <div>
            {
               descriptionCollapse ? <div className="showMore">
                  <Button 
                     onClick={() => showLess()} 
                     className='button resume m-auto' 
                     variant="outlined"
                  >
                     Show More
                  </Button>
               </div> : <div className="col-7"></div>
            }
            <div className="scrollUp">
            <Fab 
               onClick={() => props.scrollFunc()} 
               size="medium" 
               color="primary" 
               aria-label="add" 
               className="float-right BG"
            >
               <ArrowUpwardIcon className="arrowIcon"/>
            </Fab>
            </div>
         </div>
      </div>
   );
})

export default Works;