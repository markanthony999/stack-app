import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Page_1 from '../screens/Page_1';
import Page_2 from '../screens/Page_2';
import Page_3 from '../screens/Page_3';
const Stack = createStackNavigator();
const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					title: 'Home',
					headerStyle: {
						backgroundColor: '#09f',
					},
				}}
			/>
			<Stack.Screen name="Page_1" component={Page_1} />
			<Stack.Screen name="Page_2" component={Page_2} />
			<Stack.Screen name="Page_3" component={Page_3} />
		</Stack.Navigator>
	);
};
export default StackNavigator;
