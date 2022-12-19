import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Common, Post as styles} from '../stylesheets/styles';
import {Comment, Upvote} from '../assets/icons';
import PROFILE_ICON_COLORS from '../assets/constants/ProfileIconColors';
import moment from 'moment';

const PostListItem = ({
  data,
  navigation,
  isTouchable = true,
  autoPlay = false,
}) => {
  const {
    author,
    created,
    id,
    num_comments: commentCount,
    subreddit_name_prefixed: subredditName,
    title,
    thumbnail,
    ups: upvoteCount,
  } = data;

  const dateObj = new Date();
  const postTime = moment(dateObj.getTime() - created);

  const PostHeader = () => (
    <View style={[Common.header, Common.mrgBtmHalfRem]}>
      <View style={Common.rowCntr}>
        <View
          style={[
            styles.profileIcon,
            {
              backgroundColor:
                PROFILE_ICON_COLORS[Math.floor(Math.random() * 4)],
            },
          ]}
        />
        <View>
          <Text style={Common.h4}>{subredditName}</Text>
          <Text style={Common.subtext}>u/{author}</Text>
        </View>
      </View>
      <Text style={Common.subtext}>{postTime.fromNow()}</Text>
    </View>
  );

  const PostMain = () => (
    <>
      <Text style={[Common.h3, Common.mrgBtmHalfRem]}>{title}</Text>
      {thumbnail &&
      thumbnail != 'self' &&
      thumbnail != 'default' &&
      thumbnail != 'nsfw' ? (
        <Image
          resizeMode="cover"
          source={{
            uri: thumbnail,
          }}
          style={[Common.mrgRgtHalfRem, styles.image]}
        />
      ) : null}
    </>
  );

  const PostFooter = () => (
    <View style={Common.rowCntr}>
      <View style={[Common.rowCntr, Common.mrgRgt1Rem]}>
        <Upvote style={Common.mrgRgtHalfRem} />
        <Text style={Common.h4}>{upvoteCount}</Text>
      </View>
      <View style={Common.rowCntr}>
        <Comment style={Common.mrgRgtHalfRem} />
        <Text style={Common.h4}>{commentCount}</Text>
      </View>
    </View>
  );

  return (
    <View>
      {isTouchable ? (
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigation.navigate('Post', {
              data,
            });
          }}>
          <PostHeader />
          <PostMain />
          <PostFooter />
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          <PostHeader />
          <PostMain />
          <PostFooter />
        </View>
      )}
    </View>
  );
};

export default PostListItem;
