import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import styled from 'styled-components'
import { getBusinessRoute } from '../actions/thunk.businesses.js'

class BusinessList extends Component {

  componentWillMount() {
    this.props
      .getBusinessRoute()
  }
  render() {
    return (
      <Body>
        <div>
          <h2>Business Page</h2>
        </div>
        <br />
        <Container>
          {this.props.businesses
            .map((business, i) => {
              return (
                <BusinessBox key={i}>
                  <BusinessTitle>
                    <div>
                      {business.attributes.business_name}
                    </div>
                  </BusinessTitle>
                  <div onClick={() => this.props.push(`/businesses/${business.id}/profile`)}>
                  </div>
                </BusinessBox>
              )
            })}
        </Container>
      </Body>
    )
  }
}
const mapStateToProps = (state) => {
  return { businesses: state.businesses }
}
export default connect(mapStateToProps, { push, getBusinessRoute }) (BusinessList)

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    color:black;
    width: 100%;
    position: absolute; 
    top: 50px;
    left: 0;
    background-size: cover;
    background-repeat:no-repeat;
    font-family: 'Montserrat', sans-serif;
    /* background-color: #212121; */
    input{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border:1px solid black;
      background:none;
      border-radius:2px;
      background:rgba(255,255,255,0.45);
      width:30vh;
      height: 4vh;
    }
    button{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border:1px solid black;
      background:none;
      width: 20vh;
      height: 5vh;
      padding:7.5px;
      font-size: 15px;
      text-align: center;
      margin:5px;
      font-family: 'Montserrat', sans-serif;
      background:rgba(255,255,255,0.45);
      cursor: pointer;
      &:hover{
      color: white;
      background:rgba(0,0,0,0.15);
      transform:translateY(2px);
      }};
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    color:black;
    font-family: 'Montserrat', sans-serif;
    margin: 40px;
`;

const BusinessTitle = styled.div`
    display: flex;
    flex-direction: row;
    width: 70vh;
    justify-content: flex-end;
    align-items: center;
    margin:5px;
    padding:5px;`

const BusinessBox = styled.div`
    width: 10vh;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;
    margin:5px;
    padding:5px;
    color: black;
    border: 1px solid darkgray;
    background: rgba(0,0,0,0.55);
    font-size: 2.25vh;
    cursor: pointer;
    img {
        width: 38vh;
    height:25vh;
    border: 1px solid darkgray;
    align-self: center;
    margin:5px;
    }&:hover{
        color: #696969;
        transform:translateY(2px);
        z-index: 3;
    }
`;