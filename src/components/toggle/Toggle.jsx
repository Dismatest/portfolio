import React, {useContext} from 'react'
import './Toggle.css'
import {ThemeContext} from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () =>{
        theme.dispatch({type: 'TOGGLE'})
    }
  return (
    <div className="t">
        <img src="https://th.bing.com/th/id/R.fe206da62dfb1df483c3cefd67a0c8fd?rik=j6qY4Axr3lnQdQ&riu=http%3a%2f%2fwww.iconninja.com%2ffiles%2f1017%2f439%2f665%2fmoon-icon.png&ehk=JUt7kEQ5jc5715eKWAWDyoQ6EJmnDTi7%2bmOBQGulfvw%3d&risl=&pid=ImgRaw&r=0" alt="" className="t-icon"/>
        <img src="https://th.bing.com/th/id/OIP.BDledcaDEB_9s5ZXjgDgTAHaHa?pid=ImgDet&rs=1" alt="" className="t-icon"/>
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle