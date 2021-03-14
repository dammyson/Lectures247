import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';
import Splash from '../screens/onBoarding/Splash';
import Login from '../screens/users/Login';
import { logo } from '../assets/images';
import Register from '../screens/users/Register';
import Home from '../screens/activities/Home';
import App from './app-navigator';
import Welcome from '../screens/onBoarding/Welcome';
import Cart from '../screens/activities/Cart';
import Notification from '../screens/activities/Notification';
import AddCard from '../screens/activities/AddCard';
import Profile from '../screens/activities/Profile';
import Settings from '../screens/activities/Settings';
import Details from '../screens/activities/Details';


//console.disableYellowBox = true;

class HomeStack extends Component {

  render() {
    const Stack = createStackNavigator();
    return (
          <Stack.Navigator
          screenOptions={{ 
              gestureEnabled: false,
              headerTintColor: 'white',
              headerShown: false,
             }}
             initialRouteName="home">
               
            <Stack.Screen name="home" component={Home}  />
            <Stack.Screen name="cart" component={Cart}  />
            <Stack.Screen name="notification" component={Notification}  />
            <Stack.Screen name="addcard" component={AddCard}  />
            <Stack.Screen name="settings" component={Settings}  />
            <Stack.Screen name="details" component={Details}  />
          </Stack.Navigator>
       
      );
  }

}
export default HomeStack;