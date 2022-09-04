import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';
import config from '../config/config';

export default class HomeScreen extends Component {
  componentDidMount() {
    console.log(config.API_KEY);
  }
  render() {
    return (
      <View>
        <Categories />
        <TrendingNews />
        <Text>Home</Text>
      </View>
    );
  }
}
