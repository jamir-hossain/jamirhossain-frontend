import React, { useEffect, useState } from 'react';
import worksData from '../../File/worksData';
import Title from '../Title/Title';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const WorksDetails = () => {
   const param = useParams()
   console.log(param)
   const [someWorks, setSomeWorks] = useState(null)
   useEffect(() => {
      setSomeWorks(worksData)
   }, [])

   const project = someWorks && someWorks.find( data => data.id === parseFloat(param.id))
   console.log(project)

   const firstWord = 'Details'
   const secondWord = 'Of Project'
   const link = 'Details'

   return (
      <div className='container'>
         <Title 
            firstWord={firstWord}
            secondWord={secondWord}
            buttonText={link}
         ></Title>
         <div className='row mb-3'>
            <div className='col-md-2'></div>
            <div className="card cardStyle singleCart col-md-8 p-0 my-5" style={{backgroundColor: "#0a192f"}}>
            <img className='card-img-top' src={project && project.image} alt=""/>
               <div className="card-body">
                  <h5 className="text-white projectTitle"> 
                     {project && project.title} 
                  </h5>
                  <p className="text-white text-justify"> 
                     {project && project.description}
                  </p>
                  <div className='skills-items-container mx-0 px-0 py-0'>
                     {
                        project && project.tools.map(data => {
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
                           href={project && project.githubUrl} target="_blank"
                        >
                           <FontAwesomeIcon icon={faGithub}/>
                        </a>
                     </li>
                     <li className="list-inline-item h5">
                        <a 
                           className="UrlIcon" 
                           href={project && project.siteUrl} 
                           target="_blank"
                        >
                           <FontAwesomeIcon icon={faExternalLinkAlt}/>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
           <div className='col-md-2'></div>
         </div>
      </div>
   );
};

export default WorksDetails;