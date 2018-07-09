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
  Text,
  View,
  FlatList,
  Image
} from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import packagejson from '../../../package.json';
import { Page } from '../../components';

const dependencies = Object.keys(packagejson.dependencies);

type Props = {};
export default class About extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  componentDidMount() {
    // this.props.navigation.openDrawer();
    // this.props.navigation.toggleDrawer();
  }

  renderItem({item}) {
    return (
        <View style={styles.item}>   
          <Text style={styles.info}>{item}</Text>
          <Text style={styles.info}>{packagejson.dependencies[item]}</Text>
        </View>
    );
  }

  keyExtractor(item, index) {
    return `key-${index}`;
  }

 render() {
    return (
      <Page footer navigation={this.props.navigation}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.welcome}>{`WELCOME TO REACT NATIVE ${packagejson.name.toUpperCase()}`}</Text>
            <Image
            resizeMode="cover"
            style={styles.image}
            source={require('../../../ic_launcher.png')}/>
            <Text style={styles.welcome}>{`These are the dependencies that this project is using now!`}</Text>
          </View>
        </View>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
        <View style={styles.header}>   
            <Text style={styles.info}>NAME</Text>
            <Text style={styles.info}>VERSION</Text>
        </View>
     
        <FlatList
            data={dependencies}
            showsVerticalScrollIndicator={false}
            keyExtractor={this.keyExtractor.bind(this)}
            renderItem={this.renderItem.bind(this)}
          />
         </View>      
              
      
       </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 8,
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
  },
  info: {
    margin: 5,
    color: '#333333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    height: 40,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomWidth: 0.5,
    height: 40,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 120,
  },
});
