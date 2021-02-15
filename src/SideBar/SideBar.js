import React from 'react'
import home from '../assets/home.png'
import search from '../assets/search.png'
import sort from '../assets/sort.png'
import './SideBar.scss'
import PropTypes from 'prop-types'
import { NavLink, Route } from 'react-router-dom'

const SideBar = ({displayForm, clearSearchResults, showSort, showForm}) => {
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
                onClick={() => displayForm("showForm", "showForm")}
              />
            );
          }}
          />
          <Route exact path='/' render={ () => {
            return <img 
            className="sortIcon" 
            src={sort}
            alt="up-and-down-arrows"
            onClick={() => displayForm('showSort', "showSort")}
            />;
          }}
          />
        </div>
      </nav>
    );
}

export default SideBar
