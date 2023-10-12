import "./style.css"
import gitHubIcon from "./gitHub-black.svg"


const BtnGitHub = ({link}) => {

    // target="_blank" - открытие нового окна, не закрывая предыдущее

    return ( 
        <a href={link} target="_blank" className="btn-outline">
        <img src={gitHubIcon} alt=""></img>
        GitHub repo
    </a>

     );
}
 
export default BtnGitHub;