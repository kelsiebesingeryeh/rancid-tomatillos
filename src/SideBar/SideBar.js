import React from 'react'
import home from '../assets/home.png'
import './SideBar.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const SideBar = ({backToMain}) => {
    return (
      <aside>
        <NavLink to='/'>
          <img
            className="homeIcon"
            src={home}
            alt="home-icon"
            onClick={backToMain}
          />
        </NavLink>
        <h1>Rancid Tomatillos</h1>
      </aside>
    );
}

export default SideBar

SideBar.propTypes = {
  backToMain: PropTypes.func
};
