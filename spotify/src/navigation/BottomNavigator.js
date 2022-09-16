import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import HomeScreen from '../screens/Home/HomeScreen';

import SearchScreen from '../screens/SearchScreen/SearchScreen';

import ProfileStackNavigation from './ProfileStackNavigation';
const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  const theme = useSelector(state => state.theme.activeTheme);
  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        activeBackgroundColor: theme === 'light' ? 'white' : 'black',
        inactiveBackgroundColor: theme === 'light' ? 'white' : 'black',
        style: {
          backgroundColor: theme === 'light' ? 'white' : 'black',
          paddingBottom: 3,
        },
      }}
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: {color: theme === 'light' ? 'black' : 'white'},
      }}>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShadowVisible: false,
          tabBarIcon: ({size, focused}) => (
            <MaterialCommunityIcons
              name={`home${focused ? '' : '-outline'}`}
              color={theme === 'light' ? 'black' : 'white'}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShadowVisible: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({size, focused}) => (
            <Ionicons
              name={`search${focused ? '' : '-outline'}`}
              color={theme === 'light' ? 'black' : 'white'}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ProfileStack"
        component={ProfileStackNavigation}
        options={{
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShown: false,
          headerShadowVisible: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({size, focused}) => (
            <Ionicons
              name={`person${focused ? '' : '-outline'}`}
              color={theme === 'light' ? 'black' : 'white'}
              size={size}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
