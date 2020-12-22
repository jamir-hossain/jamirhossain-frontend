import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Title.css'

const Title = (props) => {
   return (
      <div className='row mt-5 py-3'>
         <div className='col-lg-9 col-xl-7'>
            <div className='row'>
               <h3 className="col-lg-5 text-white"> 
                  {props.firstWord} <span style={{color:'#fff454'}}>{props.secondWord}</span>
               </h3>
               <div className='col-lg-7 action text-right details-link'>
                  <Button 
                     className='button resume TL' 
                     variant="outlined"
                  >
                     {props.buttonText}
                  </Button>
               </div>
            </div>
         </div>
         <div className='col-lg-3 col-xl-5'></div>
      </div>
   );
};

export default Title;