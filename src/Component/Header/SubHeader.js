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
            <li className="nav-item">
               <Link onClick={()=> setIsActive('about')} className={ isActive === 'about' ? "nav-link active navLinkSm" : "nav-link navLinkSm"} to="/"><FontAwesomeIcon icon={faUserTie} /> <br/>ABOUT</Link>
            </li>
            <li className="nav-item">
               <Link onClick={()=> setIsActive('skills')} className={ isActive === 'skills' ? "nav-link active navLinkSm" : "nav-link navLinkSm"} to="/skills"><FontAwesomeIcon icon={faHeadSideVirus} /> <br/>SKILLS</Link>
            </li>
            <li className="nav-item">
               <Link onClick={()=> setIsActive('works')} className={ isActive === 'works' ? "nav-link active navLinkSm" : "nav-link navLinkSm"} to="/works"><FontAwesomeIcon icon={faTasks} /> <br/>WORKS</Link>
            </li>
            <li className="nav-item">
               <Link onClick={()=> setIsActive('contact')} className={ isActive === 'contact' ? "nav-link active navLinkSm" : "nav-link navLinkSm"} to="/contact"><FontAwesomeIcon icon={faAddressBook} /> <br/>CONTACT</Link>
            </li>
            <li className="nav-item">
               {/* <Link className="nav-link navLinkSm btn-download" to="/resume"><FontAwesomeIcon icon={faFileAlt} /> <br/>RESUME</Link> */}

               <a className="nav-link navLinkSm btn-download" target="_blank"
               href="https://drive.google.com/file/d/1CgOo6mW5u-Q67Pwih1oR3nnwfkSKBpGq/view?usp=sharing"> <FontAwesomeIcon icon={faFileAlt} /> <br/>RESUME</a>
            </li>
         </ul>
      </nav>
      <div className="headerDiv"></div>
      </div>
   );
};

export default SubHeader;