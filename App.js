import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FaHome} from 'react-icons/fa';
import Ionicons from '@expo/vector-icons/Ionicons';
import {AntDesign} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // tabBarIcon: () => <FaHome />,
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="search1" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
