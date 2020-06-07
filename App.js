import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';

import NewItem from './components/Item';
import ItemInput from './components/EnteringItem';

export default function App() {
  //useState is a react hook

  const [items, setItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //adding item
  const addItemHandler = itemTitle => {
    if (itemTitle.length == 0) {
      return; //basically ignore user input cause its empty
    }
    setItems((currentItems) => [...currentItems, {uid:Math.random().toString(), value: itemTitle}]);
    setIsAddMode(false);
  };

  //removing item
  const removeItemHandler = itemId => {
    setItems(currentItems => {
      return currentItems.filter((item) => item.uid != itemId);
    });
  };

  //canceling
  const cancelItemAdditionHandler = () => {
    setIsAddMode(false);
  };




  return (
  <View style={styles.container}>
  <Image style={styles.logo} source={require('./assets/finito-logo.png')} />
    <Text style={styles.text}> to-do </Text>
    <Button title="+" onPress={() => setIsAddMode(true)} />
    <ItemInput
      visible={isAddMode}
      onAddItem={addItemHandler}
      onCancel={cancelItemAdditionHandler}
    />
    <FlatList
      // dont need key extractor if use key prop
      keyExtractor={(item,index) => item.uid}
      data={items}
      renderItem={itemData => ( <NewItem uid={itemData.item.uid} onDelete={removeItemHandler} title={itemData.item.value} />
      )}
    />
  </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2f0db',
    alignItems: 'center',
    paddingTop: 50,
  },
  text: {
    fontSize: 30,
    textAlign:'center'
  },
  logo: {
    resizeMode: "contain",
    width:100,
    height:100,
  }
});
