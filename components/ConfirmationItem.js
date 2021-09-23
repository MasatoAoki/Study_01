import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert, } from 'react-native';
import user from './user.json' //dummy


const ConfirmationItem = () => {

    return (
        <View style={styles.confirmationContainer}>
            <Text style={styles.confirmationtxtContainer} >緊急事態者</Text>
            <View style={styles.confirmationAnsContainer1}>
            {user.map((users)=>(
                <Text style={styles.confirmationAnstxtContainer1}>{users.username}</Text>
            ))}
            </View>
 
            <Text style={styles.confirmationtxtContainer} >緊急事態者との関係性</Text>
            <View style={styles.confirmationAnsContainer1}>
            {user.map((users)=>(
                <Text style={styles.confirmationAnstxtContainer1}>{users.relationship}</Text>
            ))}
            </View>

            <Text style={styles.confirmationtxtContainer} >送信メッセージ内容</Text>
            <View style={styles.confirmationAnsContainer2}>
            {user.map((users)=>(
                <Text style={styles.confirmationAnstxtContainer2}>{users.message}</Text>
            ))}
            </View>

            <Text style={styles.confirmationtxtContainer} >メッセージ送信先</Text>
            <View style={styles.confirmationAnsContainer2}>
            {user.map((users)=>(
                <Text style={styles.confirmationAnstxtContainer2}>{users.send}</Text>
            ))}
            </View>

        </View>

    )}





const styles = StyleSheet.create({
    
    confirmationContainer: {
        width: "100%",
        height: "68%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        
    },

    confirmationAnsContainer1:{
        width: "90%",
        height: "10%",
        backgroundColor: "#fff",
        borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom:"3%",  
 
    },

    confirmationAnsContainer2:{
        width: "90%",
        height: "25%",
        backgroundColor: "#fff",
        borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom:"3%",  
 
    },

    
    confirmationtxtContainer:{
        fontSize:25,
        fontWeight:"500"
    },
    confirmationAnstxtContainer1:{
        fontSize:25,
        fontWeight:"500"
    },
    confirmationAnstxtContainer2:{
        fontSize:18,
        fontWeight:"500"
    },

    


});


export default ConfirmationItem;
