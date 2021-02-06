import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, Icon, } from 'react-native-elements';
import { lightTheme } from '../theme/colors';
import { View, Dimensions, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../screens/activities/Home';
import Collection from '../screens/activities/Collection';
import Wishlist from '../screens/activities/Wishlist';



const Tab = createBottomTabNavigator();

class AppNavigator extends Component {

  render() {
    let menuBarIcon;

    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'md-home-outline';
              return (
                <View style={{ width: Dimensions.get('window').width / 5 }}>
                  <Icon
                    name={iconName}
                    size={22}
                    color={color}
                    type='ionicon'
                  />
                  <Text style={{ marginTop: 1, marginRight: 7, marginLeft: 7, fontSize: 10, color: color, textAlign: 'center' }}>Home</Text>
                </View>
              );
            }
            else if (route.name === 'Account') {
              return (
                <View style={{ width: Dimensions.get('window').width / 5 }}>
                  <Icon
                    name={'user'}
                    size={22}
                    color={color}
                    type='entypo'
                  />
                  <Text style={{ marginTop: 1, marginRight: 7, marginLeft: 7, fontSize: 10, color: color, textAlign: 'center' }}>Account</Text>
                </View>
              );
            }
            else if (route.name === 'Wishlist') {
              return (
                <View style={{ width: Dimensions.get('window').width / 5 }}>
                  <Icon
                    name='md-heart-outline'
                    size={22}
                    color={color}
                    type='ionicon'
                  />
                  <Text style={{ marginTop: 1, marginRight: 7, marginLeft: 7, fontSize: 10, color: color, textAlign: 'center' }}>Wishlist</Text>
                </View>
              );
            } else if (route.name === 'Collection') {
              return (
                <View style={{ width: Dimensions.get('window').width / 5 }}>
                  <Icon
                    name={'ios-star-outline'}
                    size={22}
                    color={color}
                    type='ionicon'
                  />
                  <Text style={{ marginTop: 1, marginRight: 7, marginLeft: 7, fontSize: 10, color: color, textAlign: 'center' }}>Collection</Text>
                </View>
              );
            }
            else if (route.name === 'Search') {
              iconName = 'user';
              return (
                <View style={{ width: Dimensions.get('window').width / 5 }}>
                  <Icon
                    name={'search1'}
                    size={22}
                    color={color}
                    type='antdesign'
                  />
                  <Text style={{ marginTop: 1, marginRight: 7, marginLeft: 7, fontSize: 10, color: color, textAlign: 'center' }}>Search</Text>
                </View>
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: lightTheme.PRIMARY_COLOR,
          inactiveTintColor: lightTheme.PRIMARY_INACTIVE_COLOR,
          style: { height: 60 },
          showLabel: false,
          keyboardHidesTabBar: true

        }}
      >


        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Account" component={Home} />
        <Tab.Screen name="Wishlist" component={Wishlist} />
        <Tab.Screen name="Collection" component={Collection} />
        <Tab.Screen name="Search" component={Home} />



      </Tab.Navigator>

    );
  }

}

export default AppNavigator;