import { combineReducers } from 'redux'
import promotions from './promotions'
import promotionIncrement from './promotionIncrement'
import promotionLoading from './promotionLoading';
import promotionsNotFavorite from './promotionsNotFavorite';
import promotionsFavorite from './promotionsFavorite';

export default combineReducers({
  promotions,
  promotionIncrement,
  promotionLoading,
  promotionsNotFavorite,
  promotionsFavorite
})