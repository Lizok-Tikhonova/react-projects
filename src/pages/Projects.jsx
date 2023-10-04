
import React from 'react';
import Project from '../components/project/Project'

import {projects} from './../helpers/projectsList';





const Projects = () => {
    // console.log(projects)
    return ( 
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projects.map((project)=>
                    <Project title = {project.title}/>
                )} 
            
              
            </ul>
        </div>
    </main>
     );
}
 
export default Projects;