/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *  
 * @Developer: Harley Espinoza Barrias.
 * @Contact: harleyespinoza89@gmail.com
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  FlatList
} from 'react-native';

import { Page, MenuItem } from '../../components';

import data from './data';



type Props = {};
export default class Home extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  
  render() {
    const DATA = data(this.props.navigation);
    return (
      <Page navigation={this.props.navigation} footer >
        <View style={styles.container} >
            
            <FlatList
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => `key-${index}`}
              data={DATA}
              renderItem={({ item }) => <MenuItem data={item} />}
            />
         </View>
       </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#1B1B1B',
   
    paddingTop: 8
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    marginBottom: 25,
    color: 'white',
    fontSize: 20
  }
 
});
