import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
const Page_1 = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>This is Page 1</Text>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('Page_2')}
			>
				<Text>Go To Page 2</Text>
			</Pressable>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: '#09f',
		alignItems: 'center',
		padding: 10,
		marginVertical: 10,
	},
});
export default Page_1;
