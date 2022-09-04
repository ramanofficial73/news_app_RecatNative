import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'rer',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={
            {
              // tabBarIcon: () => (
              //   <Ionicons name="md-checkmark-circle" size={32} color="green" />
              // ),
            }
          }
        />
        <Tab.Screen name="Search" component={SearchScreen} />
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
