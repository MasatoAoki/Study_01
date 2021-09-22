import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert } from 'react-native';


const ConfirmationItem = () => {

    return (
        <View style={styles.confirmationContainer}>
            <Text style={styles.confirmationtestContainer} >緊急事態者</Text>
            <View style={styles.confirmationAnsContainer}>
            <Text style={styles.confirmationtestplasContainer} >芥川</Text>
            </View>
 
            <Text style={styles.confirmationtestContainer} >緊急事態者との関係性</Text>
            <View style={styles.confirmationAnsContainer}>
            <Text style={styles.confirmationtestplasContainer} >母</Text>
            </View>
            <Text style={styles.confirmationtestContainer} >送信メッセージ内容</Text>
            <View style={styles.confirmationAnsContainer}>
            <Text style={styles.confirmationtestplasContainer} >事故が発生しました</Text>
            </View>
            <Text style={styles.confirmationtestContainer} >メッセージ送信先</Text>
            <View style={styles.confirmationAnsContainer}>
            <Text style={styles.confirmationtestplasContainer} >青木　山見</Text>
            </View>
        </View>

    )
}





const styles = StyleSheet.create({
    
  


    confirmationContainer: {
        width: "100%",
        height: "68%",
        backgroundColor: "red",
        borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    confirmationAnsContainer:{
        width: "100%",
        height: "10%",
        backgroundColor: "#fff",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
 
    },
    confirmationtestContainer:{
        fontSize:40
    },
    confirmationtestplasContainer:{
        fontSize:30
    }
    


});


export default ConfirmationItem;


