
import * as React from 'react'
import {
    useEffect
}  from 'react';
import { SafeAreaView, FlatList, Text } from "react-native";
import { connect } from 'react-redux'
import store from '../../../store'
import { 
  addList, 
  addListFavorite,
  addListNotFavorite,
  increment, 
  setRefreshTrue, 
  setRefreshFalse 
} from '../../../actions'
import Card from '../../components/card';
import PeopleService from '../../services/peopleService';
import styles from '../../index.styles';

const mapStateToProps = (state) => {
  const  promotions = { 
    data: state.promotions,
    dataNotFavorite: state.promotionsNotFavorite,
    dataFavorite: state.promotionsFavorite,
    increment: state.promotionIncrement,
    refreshing: state.promotionLoading.refreshing
  }
  return { promotions }
}

const Home = (props) => {

  const arrayList = [];

  useEffect(() => {
    getPeople();
  }, [])

  const getPeople = async () => {
    props.dispatch(setRefreshTrue)
    const incrementValue = store.getState().promotionIncrement.increment;
    const response : any = await new PeopleService().getPeopleRequest(incrementValue);

    response.results && response.results.map((item) => {
      const obj = {
        ...item,
        favoritar: false
      }
      arrayList.push(obj)
    })

    if(response.next !== null){
      props.dispatch(increment)
      getPeople()
      return;
    }

    props.dispatch(addList(arrayList))
    props.dispatch(setRefreshFalse)
  }

  const renderPeople = ({ item }) => (
    <Card item={item} favorite={favorite} />
  );

  const favorite = (item) => {
    props.dispatch(setRefreshTrue)
    debugger;
    const listAll = props.promotions.data;
    debugger;
    let newList = listAll.filter(data => data.url !== item.url);
    const obj = {
      ...item,
      favoritar: !item.favoritar
    }
    newList.push(obj);

    const listFavorite = newList.filter(item => item.favoritar)
    const listNotfavorite = newList.filter(item => !item.favoritar)

    props.dispatch(addListFavorite(listFavorite))
    props.dispatch(addListNotFavorite(listNotfavorite))
    props.dispatch(addList(newList))
    props.dispatch(setRefreshFalse)
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      {!props.promotions.refreshing ? (
        <>
          {props.promotions.dataFavorite.length > 0 && 
            <>
              <Text style={[styles.textTitle, {textAlign: "center"}]}>FAVORITADOS</Text>
              <FlatList
                data={props.promotions.dataFavorite}
                renderItem={renderPeople}
                keyExtractor={item => item.url}
              />
            </>
          }
          <FlatList
            style={{marginTop: 20}}
            data={props.promotions.dataNotFavorite.length > 0 && props.promotions.dataNotFavorite || props.promotions.data}
            renderItem={renderPeople}
            keyExtractor={item => item.url}
          />
        </>
      ):(
        <Text style={[styles.textTitle, {textAlign: "center"}]}>CARREGANDO...</Text>
      )}
    </SafeAreaView>
  );
}

export default connect(mapStateToProps)(Home)