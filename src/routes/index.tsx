import * as React from 'react';
import { Provider } from 'react-redux'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/home';
import DetailScreen from '../pages/detail';
import store from '../../store'

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

export default Routes;