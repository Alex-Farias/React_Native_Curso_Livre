import React from 'react';
import {
	FlatList, SectionList,
	StyleSheet, Text, View
} from 'react-native';


//Como criar tipos de listar com RN

//Links atrelados a Page:
// learn about networking in React Native: https://reactnative.dev/docs/network

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
});

const stylesTwo = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
	},
	sectionHeader: {
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 14,
		fontWeight: 'bold',
		backgroundColor: 'rgba(247,247,247,1.0)'
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
    },
})

const FlatListBasics = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={[
					{key: 'Devin'},
					{key: 'Dan'},
					{key: 'Dominic'},
					{key: 'Jackson'},
					{key: 'James'},
					{key: 'Joel'},
					{key: 'John'},
					{key: 'Jillian'},
					{key: 'Jimmy'},
					{key: 'Julie'},
				]}
				renderItem={
					({item}) => <Text style={styles.item}>
						{item.key}
					</Text>
				}
			/>
		</View>
	)
}
'Jackson', 'James'
const SectionListBasic = () => {
	return (
		<View style={stylesTwo.container}>
			<SectionList
				sections={[
					{title: 'D',
					  data: ['Devin',
							 'Dan',
							 'Dominic',]
					},
					{title: 'J',
					  data: ['Jackson',
							 'James',
							 'Jillian',
							 'Jimmy',
							 'Joel',
							 'John',
							 'Julie',]
					},
				]}
				renderItem={
					({item})=><Text style={stylesTwo.item}>
						{item}
					</Text>
				}
				renderSectionHeader={
					({section}) => <Text style={stylesTwo.item}>
						{section.title}
					</Text>
				}
				keyExtractor={
					({item, index})=>`basicListEntry-${item.title}`
				}
			/>
		</View>
	)
}

export default FlatListBasics;