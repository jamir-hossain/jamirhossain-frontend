import React from 'react';
import myPhoto from '../../images/2910 -12234 Copy.jpg'
import { IconButton } from '@material-ui/core';
import { Facebook, GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import Typed from 'react-typed';

const Profile = () => {

   return (
      <div className="row">
         <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
         <div className="col-10 col-sm-10 col-md-10 col-lg-9 card cardStyle p-0">
            <div className='card-header pb-5 text-center'>
               <img 
                  className="img-fluid rounded-circle" 
                  src={myPhoto} alt=""
               />
            </div>
            <div className='card-body text-center cardBg'>
               <h3 className='text-white'>
                  Jamir Hossain
               </h3>
               <p className="skill">
                  <Typed
                     strings={['Programmer', 'Front-end Developer', 'MERN Stack Developer']}
                     typeSpeed={40}
                     backSpeed={40}
                     loop
                  />
               </p>
               <IconButton 
                  href="https://web.facebook.com/jomir.hossain.146"
                  target="_blank"
               >
                  <Facebook className="Icon"></Facebook>
               </IconButton>
               <IconButton 
                  href="https://github.com/Jamir45" 
                  target="_blank"
               >
                  <GitHub className="Icon"></GitHub>
               </IconButton>
               <IconButton 
                  href="https://www.linkedin.com/in/jamir-hossain-40a234206/" 
                  target="_blank"
               >
                  <LinkedIn className="Icon"></LinkedIn>
               </IconButton>
            </div>
         </div>
         <div className="col-1 col-sm-1 col-md-0 col-lg-1"></div>
      </div>
   );
};

export default Profile;