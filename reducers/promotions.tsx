const promotions = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PROMOTION':
        return [
          ...state,
          action.data
        ]
      case 'CLEAR_PROMOTIONS':
        return state = []
      default:
        return state
    }
  }
  
  export default promotions;