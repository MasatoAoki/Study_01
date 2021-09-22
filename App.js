import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert } from 'react-native';
import TitleItem from './components/TitleItem';
import TubItem from './components/TubItem';
import ConfirmationItem from './components/ConfirmationItem';
import SentakuItem from './components/SentakuItem';
import user from './components/user.json'



export default function App() {

  return (

    <SafeAreaView style={styles.container}>
      <TitleItem title="送信内容を確認後「送信」をタップしてください" />
      <ConfirmationItem/>
      <SentakuItem />
      <TubItem />
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: "center",
    justifyContent: "flex-end",
    
  
  },

});

//M_2021092221