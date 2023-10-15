
import sun from './sun.svg'
import moon from './moon.svg'
import { useState } from 'react'

const BtnDarkMode = () => {

    const [DarkMode, setDarkMode] = useState('light')

    const toggleDarkMode=()=>{
       setDarkMode((currrentValue)=>currrentValue == 'light'? 'dark':'light' )
    }
    console.log(DarkMode)

    return ( 
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
     );
}
 
export default BtnDarkMode;