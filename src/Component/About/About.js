import React from 'react';
import './About.css'
import Button from '@material-ui/core/Button';
import Profile from './Profile';
import { Link } from 'react-router-dom';


const About = () => {

   return (
      <div className="container">
         <div className="row about">
            <div className="col-md-5">
               <Profile></Profile>
            </div>
            <div className="col-md-7  py-3 px-5 mt-5">
               <div className="row">
                  <div className="col-lg-10">
                     <p style={{color:'#fff454'}}>Hello, I'm</p>
                     <h2 className="text-white">Jamir <span>Hossain</span></h2>
                     <p className="text-justify text-white pb-5 pt-3">
                        I am a web developer and programmer. I love JavaScript programming language. For this reason, I work with different frameworks of JavaScript. For the web frontend
                        I like most to use React JS And I can apply React JS efficiently on the web frontend. I am also able to use UI frameworks with react.
                        At the same time, I can work with Node JS at the backend of the web.
                     </p>
                     <div className='d-flex'>
                        <Link className="text-decoration-none" to="/contact"><Button className="button mr-3" variant="contained" color="primary">CONTACT</Button></Link>
                        <Button className='button resume' variant="outlined" > <a className="ResumeBtnA" target="_blank"
                        href="https://drive.google.com/file/d/145S0N5wq9B858Gay3iFkR22Na_Ph4wc3/view?usp=sharing">RESUME</a> </Button>
                     </div>
                  </div>
                  <div className="col-lg-2"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;