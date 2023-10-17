
import sun from './sun.svg'
import moon from './moon.svg'
import { useState, useEffect, useRef } from 'react'

const BtnDarkMode = () => {

    const [DarkMode, setDarkMode] = useState('light')
    const btn = useRef(null)

    useEffect(() => {
            if(DarkMode == 'light'){
                document.body.classList.add("dark")
                btn.current.classList.remove("dark-mode-btn--active")
               
            } else{
                document.body.classList.remove("dark")
                btn.current.classList.add("dark-mode-btn--active")
            }

    }, [DarkMode]);

    const toggleDarkMode=()=>{
       setDarkMode((currrentValue)=>currrentValue == 'light'? 'dark':'light' )
    }
    console.log(DarkMode)

    return ( 
        <button ref = {btn} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
     );
}
 
export default BtnDarkMode;