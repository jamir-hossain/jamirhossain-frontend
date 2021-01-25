import React from 'react';
import './Works.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const SingleWork = (props) => {
   const work = props.data

   return (
         <div className="card cardStyle singleCart" style={{backgroundColor: "#0a192f"}}>
            <article>
               <img className='card-img-top' src={work.image} alt=""/>
               <div className="card-body">
                  <h5 className="text-white projectTitle"> 
                     {work.title} 
                  </h5>
                  <p className="small text-white text-justify"> 
                     {
                        work.description.length > 180 
                           ? 
                        <>
                           {work.description.slice(0, 185)+'.....'}<Link className='readMore' to={`/project/${work.id}`}>Read More</Link>
                        </>
                           :
                         work.description
                     } 
                  </p>
                  <div className='skills-items-container mx-0 px-0 py-0'>
                     {
                        work.tools.map(data => {
                           return <div className='tools'>
                              <span className="small"> {data} </span>
                           </div>
                        }) 
                     }
                  </div>
               </div>
               <div className="card-footer">
                  <ul className="list-inline m-0 p-0">
                     <li className="list-inline-item text-white mr-3 h5">
                        <a 
                           className="UrlIcon" 
                           href={work.githubUrl} target="_blank"
                        >
                           <FontAwesomeIcon icon={faGithub}/>
                        </a>
                     </li>
                     <li className="list-inline-item h5">
                        <a 
                           className="UrlIcon" 
                           href={work.siteUrl} 
                           target="_blank"
                        >
                           <FontAwesomeIcon icon={faExternalLinkAlt}/>
                        </a>
                     </li>
                  </ul>
               </div>
            </article>
         </div>
   );
};

export default SingleWork;