// import React, {Component} from 'react'
// import axios from 'axios'
// import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
// import { getBusinessRoute } from '../actions/thunk.businesses.js'
// import BusinessList from './BusinessList.js'
// import Thumbs from './Thumbs.js'

// class Rating extends Component {

//   componentWillMount () {
//     //grabbing a specific business 
//     const businessId = this.props.businessId
//     this.props.getBusinessRoute(businessId)

//   }

//   render(){
//     //maping throurough all businesses and matching them with id's
//     const businessId = this.props.businessId
//     {this
//       .props
//       .businesses
//       .map((business, i) => {
//         if (business.id == businessId) {
//           return( 
//             <div key={i} className="thumbs">
//                 <Thumbs approve={this.approve} disapprove={this.disapprove}/>
//             </div>
//           )
//         } 
//       })}
//     return( 
//       <div className="thumbs">
//           <Thumbs approve={this.approve} disapprove={this.disapprove}/>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => {
// return {rating: state.rating}
// }
// export default connect(mapStateToProps, { getBusinessRoute, push })(Rating)