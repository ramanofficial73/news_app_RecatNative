import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';
// import config from '../config/config';

const API_KEY = '9c5a58c96b214d468e8f20d5571dae83';

export default class HomeScreen extends Component {
  componentDidMount() {
    console.log(API_KEY);
  }
  render() {
    return (
      <View>
        <Categories />
        <TrendingNews />
        <Text>Home jh b</Text>
      </View>
    );
  }
}
