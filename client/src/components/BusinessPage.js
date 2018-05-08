import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getBusinessRoute } from '../actions/thunk.businesses.js'

import BusinessList from './BusinessList.js'

class BusinessPage extends Component {

  componentWillMount() {
    const businessId = this.props.match.params.businessId
    this.props.getBusinessRoute(businessId)
  }

  render() {
    const businessId = this.props.match.params.businessId
    return (
      <Container>
      <div onClick={() => this.props.push(`/`)}>Home</div>
        {this
          .props
          .businesses
          .map((business, i) => {
            if (business.id == businessId) {
              return (
                <div className="businessCard" key={i}>
                  <h2>{business.attributes.business_name}</h2>
                  <br />
                  <h3>City:{business.attributes.city}</h3>
                  <h3>State:{business.attributes.state}</h3>
                  <h3>Closed:{business.attributes.closed}</h3>
                  <h3>Latitude:{business.attributes.latitude}</h3>
                  <h3>Longitude:{business.attributes.longitude}</h3>
                </div>
              )
            }
          })}
      </Container>

    );
  }
}

const mapStateToProps = (state) => {
  return { businesses: state.businesses }
}

export default connect(mapStateToProps, { getBusinessRoute, push })(BusinessPage);





const Container = styled.div`
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        color:black;
                        width: 100%;
                        position: relative;
                        top: 0px;
                        left: 0;
                        background-size: cover;
                        background-repeat:no-repeat;
                        font-family: 'Montserrat', sans-serif;
//     /* .businessCard{
//                       display: flex;
//                     flex-direction: column;
//                     justify-content: center;
//                     align-items: center;
//                     position: relative;
//                     width: 80vh;
//                     } */
//     img{

//                       width: 60vh;
//                     height: 45vh;
//                     border: 2px solid white;
//                     margin-bottom:20px;
//                   }
//     h2{
//                       display: flex;
//                     flex-direction: column;
//                     justify-content: center;
//                     align-items: center;
//                     color: black;
//                     /* text-shadow:2px 2px 2px rgba(0,0,0,0.45); */
//                   }
//     button{
//                       border: 1px solid black;
//                     background:none;
//                     width: 125px;
//                     height: 45px;
//                     padding:7.5px;
//                     font-size: 15px;
//                     text-align: center;
//                     margin:5px;
//                     font-family: 'Montserrat', sans-serif;
//                     background:rgba(255,255,255,0);
//                     cursor: pointer;
//       &:hover{
//                       color: white;
//                     background:rgba(0,0,0,0.15);
//                     transform:translateY(2px);
//                     }};
//               `

