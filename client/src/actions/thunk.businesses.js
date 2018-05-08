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

export function sendOneBusinessToState(businessFromDatabase) {
  return {type: 'GET_ONE_BUSINESS', businessFromDatabase}
}

export function getOneBusinessRoute(businessId) {
  return function (dispatch) {
    return axios.get(`/businesses/${businessId}`)
    .then((response) => {
      dispatch(sendOneBusinessToState(response.data))
    })
  }
}

export function sendNewBusinessToState(newBusinessData) {
  return {type: 'CREATE_BUSINESS', newBusinessData}
}

export function sendNewBusinessToDatabase(newBusinessInfo) {
  return function (dispatch) {
    return axios.post('/businesses', newBusinessInfo)
    .then((response) => {
      dispatch(sendNewBusinessToState(response.data))
    })
  }
}

export function editedBusinessToState(editedBusinessData) {
  return {type: 'EDIT_BUSINESS', editedBusinessData}
}

export function editedBusinessInDatabase(editedBusinessInfo) {
  return function (dispatch) {
    return axios.patch(`/businesses/${editedBusinessInfo.id}`, editedBusinessInfo)
    .then((response) => {
      dispatch(editedBusinessToState(editedBusinessInfo))
    })
  }
}

export function deleteBusinessFromState(businessToDeleteId) {
  return {type: 'DELETE_BUSINESS', businessToDeleteId}
}

export function deleteBusinessFromDatabase(businessToDeleteFromDatabase) {
  return function (dispatch) {
    return axios.delete(`/businesses/${businessToDeleteFromDatabase._id}`)
    .then((response) => {
      dispatch(deleteBusinessFromState(businessToDeleteFromDatabase._id))
    })
  }
}