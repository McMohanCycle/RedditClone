import {View, Text} from 'react-native';
import React from 'react';
import {Common, Post} from '../stylesheets/styles';
import {Upvote} from '../assets/icons';
import PROFILE_ICON_COLORS from '../assets/constants/ProfileIconColors';

const CommentListItem = ({data}) => {
  const {author, comment, upvoteCount} = data;
  return (
    <View style={Post.container}>
      <View style={[Common.rowCntr, Common.mrgBtmHalfRem]}>
        <View
          style={[
            Post.profileIcon,
            {
              height: 16,
              width: 16,
              backgroundColor:
                PROFILE_ICON_COLORS[Math.floor(Math.random() * 4)],
            },
          ]}
        />
        <Text style={Common.h4}>u/{author}</Text>
      </View>
      <Text style={[Common.subtext, Common.mrgBtmHalfRem]}>{comment}</Text>
      <View style={Common.rowCntr}>
        <Upvote style={Common.mrgRgtHalfRem} />
        <Text style={Common.h4}>{upvoteCount}</Text>
      </View>
    </View>
  );
};

export default CommentListItem;
