import React, { Component } from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import SomeWorks from './SomeWorks/SomeWorks';

class Home extends Component {
   render() {
      return (
         <div>
            <About></About>
            <SomeWorks></SomeWorks>
            <Skills></Skills>
            <Contact></Contact>
         </div>
      );
   }
}

export default Home;