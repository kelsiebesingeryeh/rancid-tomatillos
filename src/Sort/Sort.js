import React, { Component } from 'react'
import './Sort.scss'

class Sort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: this.props.movies
        }
    }

    sortMoviesByRating = () => {
        
    }
    
    render() {
        return (
            <form className='sortDropDown'>
                <label htmlFor="movies">Sort by:</label>
                <select name="movies" id="movies">
                    <option value="high">Rating High to Low</option>
                    <option value="low">Rating Low to High</option>
                    <option value="alphabetically">Movie Title A to Z</option>
                    <option value="reverseAlphabetically">Movie Title Z to A</option>
                </select>
            </form>
        )
    }
}

export default Sort