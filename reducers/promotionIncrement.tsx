const promotionIncrement = (state = {increment: 1}, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return  { increment: state.increment + 1}
      case 'BACK_TO_START':
        return { increment: 1 }
      default:
        return state
    }
  }
  
  export default promotionIncrement;