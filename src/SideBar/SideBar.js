import React from 'react'
import home from '../assets/home.png'
import './SideBar.css'

const SideBar = () => {
    return (
        <aside>
            <img className='homeIcon' src={home} />
            <h1>Rancid Tomatillos</h1>
        </aside>
    )
}

export default SideBar