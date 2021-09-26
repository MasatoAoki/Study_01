import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert } from 'react-native';
import MessageTransmissionConfirmation from './screens/MessageTransmissionConfirmation';



export default function App() {

  return (

    <SafeAreaView style={styles.container}>
      <MessageTransmissionConfirmation/>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "flex-end",
    
  
  },

});

