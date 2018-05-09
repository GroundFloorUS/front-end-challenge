import React, { Component } from 'react'
import axios from 'axios'


class Thumbs extends Component {


  render() {
    // const disapprove = this.props.business.score--
    // const approve = this.props.business.score++
    return (
      <div className="thumbs">
        <button onClick={disapprove}>Thumb-down</button>
        <button onClick={approve}>Thumb-up</button>
      </div>
    )
  }
}
export default Thumbs