import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Common, Post as styles} from '../stylesheets/styles';
import {useSelector} from 'react-redux';
import PostListItem from '../components/Post';
import CommentListItem from '../components/CommentListItem';
import colors from '../assets/constants/colors';
import {BackArrow} from '../assets/icons';

const Post = props => {
  const {navigation} = props;
  const {data} = props.route.params;
  const {id, subreddit_name_prefixed: subredditName} = data;

  const accessToken = useSelector(state => state.user.accessToken);

  const [isLoading, setIsLoading] = useState(false);
  const [commentData, setCommentData] = useState([]);

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://oauth.reddit.com/${subredditName}/comments/?article=${id}&limit=15&depth=1`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      const data = await response.json();
      const comments = data.data.children.map(comment => {
        return {
          author: comment.data.author,
          comment: comment.data.body,
          key: comment.data.id,
          upvoteCount: comment.data.ups,
        };
      });

      setCommentData(comments);
    } catch (error) {
      console.log('fetchComments/error: ', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const ListHeaderComponent = () => (
    <>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrow height={40} width={40} style={Common.mrgBtm1Rem} />
      </TouchableOpacity>
      <View style={Common.mrgBtm1Rem}>
        <PostListItem data={data} isTouchable={false} />
      </View>
    </>
  );

  return (
    <View style={Common.container}>
      {isLoading ? (
        <ActivityIndicator color={colors.REDDIT_RED} size="large" />
      ) : (
        <FlatList
          data={commentData}
          renderItem={({item}) => (
            <CommentListItem data={item} key={item.key} />
          )}
          ItemSeparatorComponent={<View style={Common.mrgBtmHalfRem} />}
          ListHeaderComponent={<ListHeaderComponent />}
        />
      )}
    </View>
  );
};

export default Post;
