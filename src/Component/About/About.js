import React from 'react';
import './About.css'
import Button from '@material-ui/core/Button';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';


const About = () => {

   return (
      <div className="container">
         <Particles
                style={{ position: 'absolute', top: 70, left: 0, height:'auto'}}
                params={{
                    "particles": {
                        "number": {
                            "value": 60
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
         <div className="row about">
            <div className="col-md-5">
               <Profile></Profile>
            </div>
            <div className="col-md-7  py-3 px-5 mt-5">
               <div className="row">
                  <div className="col-lg-10">
                     <p style={{color:'#fff454'}}>
                        Hello, I'm
                     </p>
                     <h2 className="text-white">
                        Jamir <span>Hossain</span>
                     </h2>
                     <p className="text-justify text-white pb-5 pt-3">
                        I am a web developer and programmer. I love JavaScript programming language. For this reason, I work with different frameworks of JavaScript. For the web frontend
                        I like most to use React JS And I can apply React JS efficiently on the web frontend. I am also able to use UI frameworks with react.
                        At the same time, I can work with Node JS at the backend of the web.
                     </p>
                     <div className='d-flex'>
                        <Link 
                           className="text-decoration-none" 
                           to="/contact"
                        > 
                           <Button 
                              className="button mr-3" 
                              variant="contained" 
                              color="primary"
                           >CONTACT
                           </Button>
                        </Link>
                        <Link 
                           className="text-decoration-none" 
                           to="/achievement"
                        >
                           <Button 
                              className="button mr-3" 
                              variant="contained" 
                              color="primary"
                           >ACHIEVEMENT
                           </Button>
                        </Link>
                        <Button 
                           className='button resume' 
                           variant="outlined"
                        > 
                           <a 
                              className="ResumeBtnA" 
                              target="_blank"
                              href="https://drive.google.com/file/d/1J_qrr3vS7EhVnEJ-RxnGs92ON26aIgUa/view?usp=sharing"
                           >RESUME
                           </a>
                        </Button>
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