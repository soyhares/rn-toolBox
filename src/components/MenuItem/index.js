import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Item from './Item'

const MenuItem = ({ data = {} }) => {
  console.log(data);
  return (
    <View>
      <View style={styles.header}>
        <Icon name="beenhere" color="#333" />
        <Text style={styles.text}>{data.title.toUpperCase()}</Text>
      </View>
      <View style={styles.wrapper}>
        
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `key-${index}`}
          data={data.items}
          renderItem={({ item }) => <Item bodyItem={item} />}
        />
      </View>
    </View>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  wrapper:{
    paddingVertical: 8,
    height: 180,
    alignItems: 'center',
    //marginHorizontal: 8
  },
  text: {
    color: '#333',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
    paddingHorizontal: 8
  },
  header: {
    marginHorizontal: 8,
    flexDirection: 'row'
  }
 

});
