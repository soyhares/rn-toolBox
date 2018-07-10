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
  ActivityIndicator,
  StatusBar
} from 'react-native';

import { Page, Logo } from '../../components';

type Props = {};
export default class Splash extends Component<Props> {

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  componentDidMount() {

    setTimeout(()=>{
      this.props.navigation.navigate('mainStack');
      StatusBar.setHidden(false);
    }, 2500);
   
  }

 render() {
    return (
      <Page scrollEnabled={false}>
        <View style={styles.container} >
            <Logo />
             <Text style={styles.text}> React Native ToolBox </Text>
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
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 250,
    color: '#006292',
    fontSize: 20
  }
 
});
