import {View, Text} from 'react-native';
import React from 'react';
import {Common} from '../stylesheets/styles';

const Post = props => {
  return (
    <View style={Common.container}>
      <Text style={Common.h2} onPress={() => props.navigation.goBack()}>
        Post
      </Text>
    </View>
  );
};

export default Post;
