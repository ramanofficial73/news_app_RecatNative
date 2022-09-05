import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TrendingNews from '../Components/TrendingNews';
import Categories from '../Components/Categories';
const API_KEY = '9c5a58c96b214d468e8f20d5571dae83';

export default class HomeScreen extends Component {
  componentDidMount() {
    console.log(API_KEY);
  }
  render() {
    return (
      <View>
        <Categories navigation={this.props.navigation} />
        <TrendingNews />
        <Text>Home</Text>
      </View>
    );
  }
}
