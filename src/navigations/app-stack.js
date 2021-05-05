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
import Video from '../screens/activities/Video';
import Verify from '../screens/users/Verify';


//console.disableYellowBox = true;

class AppStack extends Component {

  render() {
    const Stack = createStackNavigator();
    return (
      <Root>
        <NavigationContainer >
      
          <Stack.Navigator
          screenOptions={{ 
              gestureEnabled: false,
              headerTintColor: 'white',
              headerShown: false,
             }}
             initialRouteName="Splash">

            <Stack.Screen name="Splash" component={Splash}  />
            <Stack.Screen name="Welcome" component={Welcome}  />
            <Stack.Screen name="login" component={Login}  />
            <Stack.Screen name="verify" component={Verify}  />
            <Stack.Screen name="register" component={Register}  />
            <Stack.Screen name="app" component={App}  />
            <Stack.Screen name="vd" component={Video}  />
          </Stack.Navigator>
        </NavigationContainer>
        </Root>
      );
  }

}
export default AppStack;