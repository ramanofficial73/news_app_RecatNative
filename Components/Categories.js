import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';

const categories = [
  'Entertainment',
  'business',
  'Politics',
  'Health',
  'Technology',
  'Sports',
];

export default class Categories extends Component {
  state = {};

  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View>
            <Text
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
                fontSize: 19,
                margin: 10,
                borderRadius: 10,
              }}
              key={index}>
              {category}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}
