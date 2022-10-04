import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function App() {
    return (
        <>
            //Aqui é uma view com propriedades vindas de uma herança
            <View style={styles.container}>
                <Text>Hello There!</Text>
                <StatusBar style="auto" />
            </View>
            //Aqui é uma view com propiedades sem herança
            <View style={{ flex: 1, justifyContent: "center", alignItems:"center" }} >
                <Text>Im afraid because i get fired</Text>
            </View>
        </>
        
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'RED',
        alignItems: 'center',
        justifyContent: 'center',
  },
});
