import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Alert } from 'react-native';
import user from "./user.json";

const ConfirmationItem = () => {
    const item = user.map((users) => {
        return (
            <View
                user={users.username}

            />
        )
    });



    return (

        <View style={styles.confirmationContainer}>
            <FlatList
                data={user}
                renderItem={({ item }) =>

                    <View
                        user={item.username}
                    />




                }



            />


        </View>
    )

}





const styles = StyleSheet.create({

    confirmationContainer: {
        width: "100%",
        height: "65%",
        backgroundColor: "#fff",
        borderWidth: 1,
    },


});


export default ConfirmationItem;


