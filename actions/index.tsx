export const addList = data => ({
    type: 'LIST',
    data
  })

  export const addListFavorite = data => ({
    type: 'LIST_FAVORITE',
    data
  })
  
  export const addListNotFavorite = data => ({
    type: 'LIST_NOT_FAVORITE',
    data
  })

  export const clearPromotions = {
    type: 'CLEAR_PROMOTIONS'
  }
  
  export const increment = {
    type: 'INCREMENT'
  }
  
  export const pageBackToStart = {
    type: 'BACK_TO_START'
  }
  
  export const setRefreshTrue = {
    type: 'SET_REFRESH_TRUE'
  }
  
  export const setRefreshFalse = {
    type: 'SET_REFRESH_FALSE'
  }