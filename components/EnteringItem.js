import React, { useState } from 'react';
import { Image, View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const ItemInput = props => {

  const [enteredItem, setEnteredItem] = useState('');

//setting the item to have the entered text
  const itemInputHandler = enteredText => {
    setEnteredItem(enteredText);
  };

//adds item to list
  const addItemHandler = () => {
    props.onAddItem(enteredItem);
    setEnteredItem('');
  };




  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image style={styles.logo} source={require('../assets/finito-logo.png')} />
        <TextInput placeholder="Enter Item..." style={styles.input}
        onChangeText={itemInputHandler} value={enteredItem}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addItemHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgba(210,240,219,.5)'
  },
  // enter item input box
  input: {
    width: '80%',
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  //cancel and add buttons
  buttonContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  button: {
    width: '50%',
  },
  logo: {
    resizeMode: "contain",
    width:100,
    height:100,
    paddingTop: -400,
    paddingBottom: 200,
    marginBottom: 200
  }
});

export default ItemInput;
