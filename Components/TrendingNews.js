import {ActivityIndicator, Text, View} from 'react-native';
import React, {Component} from 'react';
import {ScrollView, Image, TouchableOpacity} from 'react-native';
export default class TrendingNews extends Component {
  state = {
    news: [],
  };
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=9c5a58c96b214d468e8f20d5571dae83`,
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
          news: response.articles,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        {this.state.news.length === 0 ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.news.map((news, index) => (
              <View style={{margin: 10}}>
                <Image
                  source={{uri: `${news.urlToImage}`}}
                  style={{height: 200, width: 200, borderRadius: 10}}
                />
                <Text style={{width: 200, textAlign: 'justify'}}>
                  {news.title}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}
