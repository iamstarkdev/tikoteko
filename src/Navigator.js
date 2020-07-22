import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';

//screens
import Home from './pages/Home';
import Discover from './pages/Discover';
import New from './pages/New';
import Inbox from './pages/Inbox';
import Profile from './pages/Profile';

//button component
import Button from './components/Button'

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: '#000',
              borderTopColor: 'rgba(255, 255, 255, 0.3)'
            },
            activeTintColor: '#FFF'
          }}
        >
        <Tab.Screen
           name="Home"
           component={Home}
           options={{
             tabBarIcon: ({size, color}) => <EntypoIcons name="home" size={size} color={color}/>
           }}
        />
        <Tab.Screen
           name="Discover"
           component={Discover}
           options={{
             tabBarIcon: ({size, color}) => <FeatherIcons name="search" size={size} color={color}/>
           }}
        />
        <Tab.Screen
          name="New"
          component={New}
          options={{
            title: '',
            tabBarIcon: ({size, color}) => <Button />
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            tabBarIcon: ({size, color}) => <EntypoIcons name="chat" size={size} color={color}/>
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({size, color}) => <AntIcons name="user" size={size} color={color}/>
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  )
};
