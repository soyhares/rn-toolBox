

import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ActivityIndicator
 
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Page } from '../../components';

type Props = {};
export default class socialNetwork extends Component<Props> {
  static navigationOptions = {
    drawerLabel: 'Social Network',
  };

  
 render() {
    return (
      <Page navigation={this.props.navigation}>
        <View style={styles.container} >
            <View style={{ width: '100%'}}>
              <SocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
                onPress={()=>console.log('facebook')}
              />

              <SocialIcon
                title='Sign In With Twitter'
                button
                type='twitter'
                onPress={()=>console.log('twitter')}
              />

            <SocialIcon
                title='Sign In With Instagram'
                button
                light
                type='instagram'
                onPress={()=>console.log('instagram')}
              />
            </View>
         </View>
         
            <View style={{ width: '100%', flexDirecction: 'row' }}>
                <SocialIcon
                  type='github'
                />

                <SocialIcon
                  raised={false}
                  type='instagram'
                />

                <SocialIcon
                  light
                  type='soundcloud'
                />

                <SocialIcon
                  
                  raised={false}
                  type='youtube'
                />
            </View>
        
       </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10
  },
  
 
});
