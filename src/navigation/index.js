import React from 'react';
import {View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import Screen3Functional from '../screens/Screen3Functional';



const StackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { header: null }
  },
  Signup: {
    screen: Signup,
    navigationOptions: { header: null }
  },
  Home: {
    screen: Screen5,
    navigationOptions: { header: null }
  },
});

export default createAppContainer(StackNavigator);
