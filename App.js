import * as React from 'react';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Main from './src/navigations/app-stack';

import { Platform } from 'react-native';
 // console.disableYellowBox = true;
const Stack = createStackNavigator();

function App() {
	const TransitionPreset = Platform.OS === 'ios' ? TransitionPresets.ModalSlideFromBottomIOS : {}
	const navigationOptions = {
		headerShown: false,
		...TransitionPreset,
		gestureResponseDistance: {
			vertical: 800
		}
	}
	return (
			<Main />
	)
}
export default App;