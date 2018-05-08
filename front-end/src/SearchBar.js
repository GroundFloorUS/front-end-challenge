import Autocomplete from 'react-autocomplete';
import React from 'react';
import data from './data_set'

class SearchBar extends React.Component {
    constructor (props) {
    super(props)
    this.state = {
        value: '',
      }
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value})
        this.props.handleSearchChange(e.target.value)
    }
    render() {
      return (
        <Autocomplete
          items={data.data}
          shouldItemRender={(item, value) => item.attributes.business_name.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item.attributes.business_name}
          renderItem={(item, highlighted) =>
            <div key={item.id}>
              {item.attributes.business_name}
            </div>
          }
          value={this.state.value}
          onChange={this.handleChange}
        />
      )
    }
  }

  export default SearchBar;