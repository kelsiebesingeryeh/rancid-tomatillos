import React from 'react'
import home from '../assets/home.png'
import './SideBar.css'
import PropTypes from 'prop-types'

const SideBar = ({backToMain}) => {
    return (
      <aside>
        <img onClick={backToMain} className="homeIcon" src={home} />
        <h1>Rancid Tomatillos</h1>
      </aside>
    );
}

export default SideBar

SideBar.propTypes = {
  backToMain: PropTypes.func
};

