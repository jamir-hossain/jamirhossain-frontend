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
                     A Self-motivated, Tech enthusiast and Creative MERN stack web developer with a deep interest in JavaScript. To gain confidence and excellence using my potential in the field of “Web Development”, and express my innovative creative skills for self and company growth.
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
                              href="https://drive.google.com/file/d/18ohIK_PyUWRHIZp0LvR9SzK4HcdQoS0l/view?usp=sharing"
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