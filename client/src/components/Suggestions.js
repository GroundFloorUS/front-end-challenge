import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(guess => (
    <li key={guess.id}>
      {guess.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions