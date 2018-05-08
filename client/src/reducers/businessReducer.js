function businessReducer(
  state = [], action) {
  switch (action.type) {
    case 'GET_BUSINESSES':
      return [...action.businesses]

    case 'CREATE_BUSINESS':
    return [...state, action.newBusinessData] 

    case 'EDIT_BUSINESS ':
    return updateObjectInArray(state, action)

    case 'DELETE_BUSINESS': 
    return state.filter(business => business._id !== action.businessToDeleteId)
    
    default:
      return state
  }
}

function updateObjectInArray(array, action) {
  return array.map((business) => {
    if (business._id !== action.editedBusinessData.id) {
      return business
    }
    return {
      ...business,
      ...action.editedBusinessData
    }
  })
}

export default businessReducer