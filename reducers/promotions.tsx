const promotions = (state = [], action) => {
    switch (action.type) {
      case 'LIST':
        return action.data;
      default:
        return state
    }
  }
  
  export default promotions;