import React, { Component } from 'react'
import './Form.scss'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="searchInput"
          placeholder="Search"
          value={this.state.searchInput}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form
