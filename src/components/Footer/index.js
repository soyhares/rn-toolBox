import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import packagejson from '../../../package.json';

const Footer = ({ version }) => (
  <View style={styles.footer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <Avatar
          rounded
          size="xlarge"
          title="CR"
          source={{uri: "https://pbs.twimg.com/profile_images/1006368686674993152/NF8LAUdy_400x400.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <View>
          <Text style={styles.contact}>{` Harley Espinoza`}</Text>
          <Text style={styles.contact}>{` harleyespinoza89@gmail.com`}</Text>
        </View>
      </View>
      <Text style={styles.version}>{`Version ${packagejson.version}`}</Text>
   
  </View>
);

export default Footer;

const styles = StyleSheet.create({
  version: {
    fontSize: 10,
    margin: 5,
    color: '#f0f0f0',
  },
  footer: {
    backgroundColor: '#006292', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    borderTopWidth: 1,
    borderTopColor: '#333333'
  },
  contact: {
    fontSize: 10,
    margin: 1,
    color: '#f0f0f0',
  }

});
