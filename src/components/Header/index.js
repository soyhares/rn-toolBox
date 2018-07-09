import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements'

const Header = ({ navigation }) => (
  <View style={styles.header}>
      <Icon
        name='menu'
        color='white'
        onPress={()=>navigation.toggleDrawer()}/>

  </View>
);

export default Header;

const styles = StyleSheet.create({
  
  header: {
    backgroundColor: '#006292', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    borderTopWidth: 1,
    height: 40,
    borderTopColor: '#333333'
  },

});
