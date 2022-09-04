import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const SearchBar = props => {
  return (
    <View style={style.container}>
      <TextInput
        placeholder="Search"
        value={props.searchText}
        onChangeText={text => props.setSearchText(text)}
        style={style.input}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
};

export default SearchBar;

const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    margin: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    color: '#000',
    borderWidth: 1,
  },
});
