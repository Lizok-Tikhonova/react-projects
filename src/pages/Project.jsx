
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import imgg from "./../img/projects/02-big.jpg"


const Project = (img) => {
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Video service</h1>

                <img src={imgg} alt="" className="project-details__cover"></img>

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

                <BtnGitHub link="https://github.com"/>
            </div>
        </div>
    </main>
    );
}
 
export default Project;