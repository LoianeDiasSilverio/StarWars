
import * as React from 'react'
import {
    useState, useEffect
}  from 'react';
import { SafeAreaView, Text } from "react-native";
import { connect } from 'react-redux'
import store from '../../../store'
import { 
  addPromotion, 
  pageIncrement, 
  pageBackToStart, 
  clearPromotions, 
  setRefreshTrue, 
  setRefreshFalse 
} from '../../../actions'

const mapStateToProps = (state) => {
  const  promotions = { 
    data: state.promotions,
    refreshing: state.promotionsRefresh.refreshing
  }
  return { promotions }
}

const Home = (props) => {

  useEffect(() => {
    props.dispatch(setRefreshFalse)
    props.dispatch(addPromotion('Teste'))
  }, [])

  return(
    <SafeAreaView> 
      <Text>{props.promotions.data}</Text>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps)(Home)