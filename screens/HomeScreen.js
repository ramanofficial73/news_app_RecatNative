import React, {Component} from 'react';
import {
  View,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import TrendingNews from '../Components/TrendingNews';
import Categories from '../Components/Categories';
const API_KEY = '9c5a58c96b214d468e8f20d5571dae83';

const deviceWidth = Dimensions.get('window').width;
export default class HomeScreen extends Component {
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
        <View>
          <Categories navigation={this.props.navigation} />
        </View>
        <TrendingNews navigation={this.props.navigation} />
        <View style={{alignItems: 'center'}}>
          {this.state.news.length === 0 ? (
            <View
              style={{
                width: deviceWidth,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ActivityIndicator color="black" size="large" />
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {this.state.news.map((news, index) =>
                news.urlToImage ? (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.props.navigation.navigate('WebView', {
                        url: news.url,
                      })
                    }>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        elevation: 4,
                        width: deviceWidth - 30,
                        marginVertical: 7,
                      }}>
                      <Image
                        source={{uri: `${news.urlToImage}`}}
                        style={{height: 100, width: 100, borderRadius: 10}}
                      />
                      <Text
                        style={{
                          width: deviceWidth - 130,
                          paddingLeft: 10,
                          paddingTop: 5,
                        }}>
                        {news.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : null,
              )}
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
}
