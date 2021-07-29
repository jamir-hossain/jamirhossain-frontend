import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faFileAlt, faHeadSideVirus, faTasks, faUserTie } from '@fortawesome/free-solid-svg-icons'
import SubHeader from './SubHeader';


const Header = () => {
  const [isActive, setIsActive] = useState()
  console.log(isActive)

  return (
    <div>
      <nav className="d-none d-md-block slide out show navbar navbar-expand-md navBar py-0 fixed-top shadow-md">
        <div className="container">
          <Link
            className="navbar-brand text-white"
            to="/"
          >
            Jamir <strong style={{ color: '#fff454' }}>Hossain</strong>
          </Link>
          <div id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 navUl">
              <li className="nav-item px-">
                <Link
                  onClick={() => setIsActive('about')}
                  className={isActive === 'about' ? "nav-link active navLink" : "nav-link navLink"}
                  to="/"
                >
                  <FontAwesomeIcon icon={faUserTie} /> <br />ABOUT
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  onClick={() => setIsActive('skills')}
                  className={isActive === 'skills' ? "nav-link active navLink" : "nav-link navLink"}
                  to="/skills"
                >
                  <FontAwesomeIcon icon={faHeadSideVirus} /> <br />SKILLS
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  onClick={() => setIsActive('works')}
                  className={isActive === 'works' ? "nav-link active navLink" : "nav-link navLink"}
                  to="/works"
                >
                  <FontAwesomeIcon icon={faTasks} /> <br />WORKS
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  onClick={() => setIsActive('contact')}
                  className={isActive === 'contact' ? "nav-link active navLink" : "nav-link navLink"}
                  to="/contact"
                >
                  <FontAwesomeIcon icon={faAddressBook} /> <br />CONTACT
                </Link>
              </li>
              <li className="nav-item px-3">
                <a
                  className="nav-link navLink btn-download"
                  href="https://github.com/Jamir45/jamirhossain-frontend/raw/608668ea78d98674513fa59fcfe45d854b21624c/CV%20of%20Jamir%20Hossain.pdf"
                >
                  <FontAwesomeIcon icon={faFileAlt} /> <br />RESUME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="headerDiv"></div>
      <SubHeader></SubHeader>
    </div>

  );
};

export default Header;