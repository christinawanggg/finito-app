import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

  //items on the list in the homepage

const NewItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this,props.uid)} >
      <View style={styles.listItem}>
        <Text style={{textAlign:'center'}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: '#FCFFFC',
    width: 300,
    borderWidth: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
  }
});


export default NewItem;
