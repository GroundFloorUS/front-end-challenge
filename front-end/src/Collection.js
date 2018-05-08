import React from 'react';
import EachData from './EachData'
import data from './data_set';
import SearchBar from './SearchBar'
// import Form from './Form';

const initialState = {
    data: data.data
} 

class Collection extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: initialState.data,
            dataDisplay: []
          }
        }

    handleSearchChange = (searchValue) => {
        this.setState({
            dataDisplay: this.state.data.filter(
                values => values.attributes.business_name.toLowerCase().includes(searchValue.toLowerCase())
            )
        })
    }

    componentDidMount(){
        this.setState({
            dataDisplay: this.state.data
        })
    }

    render () {
    return (
        <div id="collection">
            <div className="search-bar">
                Search Business <SearchBar handleSearchChange={this.handleSearchChange} />
            </div>
        <div className="business">
        {this.state.dataDisplay.map(info => 
        <EachData key={info.id} {...info}/>
        )}
        </div>
        </div>
    );
}
}

export default Collection;