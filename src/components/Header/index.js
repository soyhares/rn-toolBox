import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Icon, Header } from 'react-native-elements'

const HeaderApp = ({ navigation }) => (
  
  <Header
    placement="left"
    leftComponent={{ icon: 'menu', color: '#fff', onPress: ()=>navigation.toggleDrawer() }}
    centerComponent={{ text: navigation.state.routeName.toUpperCase(), style: { color: '#fff', fontWeight: 'bold' } }}
    rightComponent={{ icon: 'info', color: '#fff', onPress: ()=>navigation.navigate('about') }}
    backgroundColor='#006292'
  />
);

export default HeaderApp;


