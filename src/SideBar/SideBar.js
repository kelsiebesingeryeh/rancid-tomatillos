import React from 'react'
import home from '../assets/home.png'
import search from '../assets/search.png'
import './SideBar.scss'
import PropTypes from 'prop-types'
import { NavLink, Route } from 'react-router-dom'
import Form from '../Form/Form'

const SideBar = ({displayForm, clearSearchResults}) => {
    return (
      <nav>
        <div className="sidebarIcons">
          <NavLink to='/'>
            <img
              className="homeIcon"
              src={home}
              alt="home-icon"
              onClick={clearSearchResults}
            />
          </NavLink>
          <Route exact path='/' render={ () => {
            return (
              <img
                className="searchIcon"
                src={search}
                alt="magnifying-glass"
                onClick={displayForm}
              />
            )
          }}
          />
        </div>
      </nav>
    );
}

export default SideBar

SideBar.propTypes = {
  backToMain: PropTypes.func
};
