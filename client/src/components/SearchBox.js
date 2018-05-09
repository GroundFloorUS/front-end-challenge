import React, { Component } from 'react'
import axios from 'axios'

class SearchBox extends Component {
  state = {
    query: '',
    results: []
  }


  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        (this.state.query.length % 2 === 0)
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

export default SearchBox