import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, Text, View, TextInput,  } from 'react-native';
import Header from './header'
import { useState } from 'react'

export default function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const UserchangeHandler = ( val ) => {
    setUsername(val);
  }
  const PasschangeHandler = ( val ) => {
    setPassword(val);
  }

  const submit = ( user, pass ) => {
    console.log('WORKS!')
  }

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <TextInput  
        style={styles.input} 
        placeholder="Username" 
        color="gray"
        onChangeText={UserchangeHandler}
        />
        <TextInput  
        style={styles.input} 
        placeholder="Password" 
        color="gray"
        onChangeText={PasschangeHandler}
        />
        <Button
        onPress={() => console.log("pressed")}
        title='Submit' 
        color='coral' 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 75,
    borderBottomWidth: 75,
    borderLeftWidth: 75,
    borderRightWidth: 75,
  },
  input:{
    textAlignVertical: 'top',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderLeftColor: 'black',
    borderLeftWidth: 2,
    borderRightColor: 'black',
    borderRightWidth: 2,
    borderTopColor: 'black',
    borderTopWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
});
