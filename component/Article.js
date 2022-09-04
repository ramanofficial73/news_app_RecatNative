import {View, Text, Webbrowser, StyleSheet, Image} from 'react-native';
import React from 'react';
import moment from 'moment';

const Article = props => {
  return (
    <Webbrowser url={props.url} style={style.container}>
      <Image
        style={style.image}
        source={{
          uri: props.urlToImage,
        }}
      />

      <View style={{padding: 20}}>
        <Text style={style.title}>{props.title}</Text>
        <Text style={style.desc} numberOfLines={3}>
          {props.description}
        </Text>
        <View style={style.data}>
          <Text style={style.heading}>
            by: <Text style={style.autor}>{props.author}</Text>
          </Text>
          {/* <Text style={style.date}>{props.publishedAt}</Text> */}
          <Text style={style.date}>
            {moment(props.publishedAt).format('MMM Do YY')}
          </Text>
        </View>
        <View>
          <Text style={{marginTop: 10}}>
            Source :
            <Text style={{color: '#ef476f', fontWeight: 'bold', fontSize: 18}}>
              {props.sourceName}
            </Text>
          </Text>
        </View>
      </View>
    </Webbrowser>
  );
};

export default Article;
const style = StyleSheet.create({
  container: {
    width: '94%',
    alignSelf: 'center',
    borderRadius: 30,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: '#fff',
    marginTop: 15,
  },
  image: {
    marginTop: 20,
    height: 200,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  desc: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '400',
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  heading: {},
  autor: {
    fontWeight: 'bold',
  },
  date: {
    fontWeight: 'bold',
    color: '#ef476f',
    fontSize: 15,
  },
});
