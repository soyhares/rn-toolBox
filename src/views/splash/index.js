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
  ActivityIndicator
 
} from 'react-native';

import { Page } from '../../components';

type Props = {};
export default class Splash extends Component<Props> {

 componentDidMount() {
    setTimeout(()=>{
      this.props.navigation.navigate('mainStack');
    }, 1000);
   
 }

 render() {
    return (
      <Page scrollEnabled={false}>
        <View style={styles.container} >
            <Image
              resizeMode="cover"
              style={styles.image}
              source={require('../../../ic_launcher.png')}/>
             <Text style={styles.text}> React Native ToolBox </Text>
             <ActivityIndicator size="small" color="#00A3EC" />
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
    backgroundColor: '#fff'
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    marginBottom: 20,

  }
 
});
