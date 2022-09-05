import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';

const categories = [
  'Technology',
  'Business',
  'Entertainment',
  'Politics',
  'Health',
  'Sports',
];

export default class Categories extends Component {
  state = {};

  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              this.props.navigation.navigate('GetNews', {
                category,
              })
            }>
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
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}
