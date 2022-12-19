import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Common, Home as styles} from '../stylesheets/styles';
import {Reddit, Refresh} from '../assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {clearUser} from '../redux/user/userAction';
import {clearState, getFilteredPosts, getPosts} from '../redux/post/postAction';
import Post from '../components/Post';
import {Dropdown} from 'react-native-element-dropdown';
import colors from '../assets/constants/colors';

const Home = props => {
  const dispatch = useDispatch();
  const {
    selectedSubreddit,
    posts,
    isLoading,
    selectedFilter: reduxSelectedFilter,
  } = useSelector(state => state.post);
  const {subreddits} = useSelector(state => state.user);

  const [selectedFilter, setSelectedFilter] = useState(reduxSelectedFilter);
  const [currentViewableItem, setCurrentViewableItem] = useState({
    isViewable: false,
    key: null,
  });

  const onViewableItemsChanged = useCallback(({changed, viewableItems}) => {
    console.log('Inside useCallback/viewableItems: ', viewableItems);
    if (viewableItems.length)
      setCurrentViewableItem({
        isViewable: viewableItems[0].isViewable,
        key: viewableItems[0].key,
      });
  }, []);

  useEffect(() => {
    if (subreddits.length) dispatch(getPosts(selectedFilter));
  }, [subreddits]);

  useEffect(() => {
    if (subreddits.length) dispatch(getFilteredPosts(selectedFilter));
  }, [selectedFilter]);

  const dropdownData = [
    {
      lable: 'Home',
      value: 'new',
    },
    {
      lable: 'Popular',
      value: 'hot',
    },
  ];

  const logOut = () => {
    dispatch(clearUser());
    dispatch(clearState());
  };

  const EmptyState = () => (
    <Text style={Common.h3}>
      Uh-oh! No posts found for {selectedSubreddit}. Please hit refresh button.
    </Text>
  );

  const SubredditPostsListHeader = () => (
    <View style={[styles.listHeader, Common.header]}>
      <Text style={Common.h2}>{isLoading ? 'Loading' : selectedSubreddit}</Text>
      <TouchableOpacity
        style={styles.refreshButton}
        onPress={() => {
          dispatch(getPosts(selectedFilter));
        }}>
        <Refresh height={24} width={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[Common.header, styles.header]}>
        <View style={Common.rowCntr}>
          <Reddit height={32} width={32} style={Common.mrgRgtHalfRem} />
          <Dropdown
            style={styles.dropdown}
            itemTextStyle={[Common.h2, {color: colors.DARK_GREY}]}
            selectedTextStyle={[Common.h2, {marginLeft: 8}]}
            data={dropdownData}
            value={selectedFilter}
            valueField="value"
            labelField="lable"
            onChange={e => {
              setSelectedFilter(e.value);
            }}
          />
        </View>
        <TouchableOpacity onPress={logOut}>
          <Text style={Common.h4}>Log out</Text>
        </TouchableOpacity>
      </View>
      <SubredditPostsListHeader />
      <View style={Common.container}>
        {isLoading ? (
          <ActivityIndicator color={colors.REDDIT_RED} size="large" />
        ) : (
          <FlatList
            viewabilityConfig={{
              itemVisiblePercentThreshold: 100,
              minimumViewTime: 2000,
            }}
            onViewableItemsChanged={onViewableItemsChanged}
            ListEmptyComponent={<EmptyState />}
            data={posts}
            renderItem={({item, index}) => (
              <Post
                autoPlay={
                  currentViewableItem.key == index &&
                  currentViewableItem.isViewable
                }
                key={item.data.id}
                data={item.data}
                navigation={props.navigation}
              />
            )}
            ItemSeparatorComponent={<View style={Common.mrgBtmHalfRem} />}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
