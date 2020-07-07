import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.head}>
            <Text style={styles.HeadLine}>MY LOGIN APP</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    head:{
        height: 80,
        padding: 38,
        Top: 0,
        width: '75%',
        marginBottom: 20
    },
    HeadLine:{
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
})