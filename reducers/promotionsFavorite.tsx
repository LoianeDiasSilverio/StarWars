const promotionsFavorite = (state = [], action) => {
    switch (action.type) {
      case 'LIST_FAVORITE':
        return action.data;
      default:
        return state
    }
  }
  
  export default promotionsFavorite;