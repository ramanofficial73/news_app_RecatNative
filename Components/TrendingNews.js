import React, {Component} from 'react';
import {ActivityIndicator, ScrollView, View, Image} from 'react-native';

const API_KEY = '9c5a58c96b214d468e8f20d5571dae83';
class TrendingNews extends Component {
  state = {
    news: [],
  };
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    ).then(res =>
      res
        .json()
        .then(response => {
          console.log(response);
          this.setState({
            news: response.articles,
          });
          console.log('raman', this.state.news.length);
        })
        .catch(error => {
          console.log('sharma', error);
        }),
    );
  }
  render() {
    <View>
      {this.state.news.length === 0 ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.state.news.map((news, index) => {
            <View key={index}>
              <Image
                source={{uri: `${news.urlToImage}`}}
                style={{height: 200, width: 200}}
              />
            </View>;
          })}
        </ScrollView>
      )}
    </View>;
  }
}

export default TrendingNews;
