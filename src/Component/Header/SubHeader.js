import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faFileAlt, faHeadSideVirus, faTasks, faUserTie } from '@fortawesome/free-solid-svg-icons'

const SubHeader = () => {
   const [isActive, setIsActive] = useState()
   console.log(isActive)

   return (
      <div>
         <nav className="d-block d-md-none slide out show navbar navbar-expand-md navBar py-0 fixed-top shadow-md">
         <ul className="d-flex justify-content-around subMenu">
            <li className="nav-item ml-3">
               <Link onClick={()=> setIsActive('about')} className={ isActive === 'about' ? "nav-link active navLink" : "nav-link navLink"} to="/"><FontAwesomeIcon icon={faUserTie} /> <br/>ABOUT</Link>
            </li>
            <li className="nav-item">
               <Link onClick={()=> setIsActive('skills')} className={ isActive === 'skills' ? "nav-link active navLink" : "nav-link navLink"} to="/skills"><FontAwesomeIcon icon={faHeadSideVirus} /> <br/>SKILLS</Link>
            </li>
            <li className="nav-item">
               <Link onClick={()=> setIsActive('works')} className={ isActive === 'works' ? "nav-link active navLink" : "nav-link navLink"} to="/works"><FontAwesomeIcon icon={faTasks} /> <br/>WORKS</Link>
            </li>
            <li className="nav-item">
               <Link onClick={()=> setIsActive('contact')} className={ isActive === 'contact' ? "nav-link active navLink" : "nav-link navLink"} to="/contact"><FontAwesomeIcon icon={faAddressBook} /> <br/>CONTACT</Link>
            </li>
            <li className="nav-item mr-3">
               <Link className="nav-link navLink btn-download" to="/resume"><FontAwesomeIcon icon={faFileAlt} /> <br/>RESUME</Link>
            </li>
         </ul>
      </nav>
      <div className="headerDiv"></div>
      </div>
   );
};

export default SubHeader;