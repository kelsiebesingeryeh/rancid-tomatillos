import React, { Component } from 'react'
import './Form.scss'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="searchInput"
          placeholder="Search"
          value={this.state.searchInput}
        />
      </form>
    )
  }
}

export default Form
