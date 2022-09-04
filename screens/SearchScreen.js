import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../component/SearchBar';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [first, setfirst] = useState(second);

  const searchArticles = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=9c5a58c96b214d468e8f20d5571dae83',
        {
          params: {
            category: 'business',
            q: searchText,
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
  return (
    <ScrollViews style={style.container}>
      {/* <Text>gh</Text> */}
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchArticles}
      />
      {/* <Text>{searchText}</Text> */}
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
    </ScrollViews>
  );
};

export default SearchScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
