import axios from 'axios'

export function sendBusinessesToState(businesses) {
  return {type: 'GET_BUSINESSES', businesses}
}

export function getBusinessRoute() {
  return function (dispatch) {
    return axios.get('/businesses')
    .then((response) =>{
      dispatch(sendBusinessesToState(response.data))
    })
  }
}


