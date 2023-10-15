
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectsList";


const Project = () => {
    const {id} = useParams();
    const proects = projects[id]

    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{proects.title}</h1>

                <img src={proects.imgBig} alt="" className="project-details__cover"></img>

                <div className="project-details__desc">
                    <p>{proects.slills}</p>
                </div>

                <BtnGitHub link="https://github.com"/>
            </div>
        </div>
    </main>
    );
}
 
export default Project;