import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const Item = ({ bodyItem }) => {
	const { primary, secundary, name, iconName, onPress } = bodyItem; 
	return (
	  <LinearGradient colors={[primary, secundary]} style={styles.item}> 
	      <View style={{  opacity: 0.9 }}>
		      <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }} >
		          <Icon name={iconName} size={25} color={primary} raised />
		          <Text style={styles.text}>{name.toUpperCase()}</Text>
		      </TouchableOpacity>
	      </View>
	   </LinearGradient>
	);
}

export default Item;

const styles = StyleSheet.create({

  item: {
    borderRadius: 4, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#cecece',
    width: 160,
    height: 160,

  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 4
  }
 

});
