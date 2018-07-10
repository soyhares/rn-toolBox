import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Ball from '../components/Ball';
import { Page } from '../../../components';

export default class BallAnimation extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Ball',
  };
  render() {
    return (
      <Page navigation={this.props.navigation}>
        <View style={styles.container}>
          <Ball />
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
