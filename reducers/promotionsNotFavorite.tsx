const promotionsNotFavorite = (state = [], action) => {
    switch (action.type) {
      case 'LIST_NOT_FAVORITE':
        return action.data;
      default:
        return state
    }
  }
  
  export default promotionsNotFavorite;