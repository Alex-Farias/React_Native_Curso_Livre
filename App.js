import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function App() {
    return (
        <>
            //Aqui � uma view com propriedades vindas de uma heran�a
            <View style={styles.container}>
                <Text>Hello There!</Text>
                <StatusBar style="auto" />
            </View>
            //Aqui � uma view com propiedades sem heran�a
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
