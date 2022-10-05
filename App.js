import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
//import { Cat } from 'YourFirstComponent(GUI).js';


export default function App() {
    return (
        //Aqui é uma view com propriedades vindas de uma herança
        //<View style={styles.container}>
        //    <Text>Hello There!</Text>
        //    <Text>Im afraid because i get fired</Text>
        //    <StatusBar style="auto" />
        //</View>
        //Aqui é uma view com propiedades sem herança
        //<View style={{ flex: 1, justifyContent: "center", alignItems:"center" }} >
        //   <Text>Im afraid because i get fired</Text>
        //</View>

        //Aqui é uma View com TextInput
        <ScrollView style={{ marginTop: 56 }}>
            <View style={styles.container}>
                <Text>
                    Insira seu e-mal:
                </Text>
            </View>
            <View style={styles.container}>
                <TextInput style = {{ width: 345, height: 40, borderColor: 'gray', borderWidth: 1 }}></TextInput>
            </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '689',
        alignItems: 'center',
        justifyContent: 'center',
  },
});
