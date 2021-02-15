import React from 'react'
import './Sort.scss'

const Sort = () => {
    return (
        <form className='sortDropDown'>
            <label for="movies">Sort by:</label>
            <select name="movies" id="movies">
                <option value="high">Rating High to Low</option>
                <option value="low">Rating Low to High</option>
                <option value="alphabetically">Movie Title A to Z</option>
                <option value="reverseAlphabetically">Movie Title Z to A</option>
            </select>
        </form>
    )
}

export default Sort