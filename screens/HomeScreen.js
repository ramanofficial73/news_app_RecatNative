import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Article from '../component/Article';
import axios from 'axios';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);

  const getNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=9c5a58c96b214d468e8f20d5571dae83',
        {
          params: {
            category: 'business',
          },
        },
      )
      .then(response => {
        console.log(response.data.articles);
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
          />
        )}
        keyExtractor={item => item.title}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {},
});
