import React from 'react'
import home from '../assets/home.png'
import search from '../assets/search.png'
import sort from '../assets/sort.png'
import './SideBar.scss'
import PropTypes from 'prop-types'
import { NavLink, Route } from 'react-router-dom'

const SideBar = ({displayForm, clearSearchResults, sortMovies}) => {
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
          <Route exact path='/' render={ () => {
            return <img 
            className="sortIcon" 
            src={sort}
            alt="up-and-down-arrows"
            onClick={sortMovies}
            />;
          }}
          />
        </div>
      </nav>
    );
}

export default SideBar
