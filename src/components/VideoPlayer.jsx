import React, {useRef} from 'react';
import Video from 'react-native-video';
import {Common, Post} from '../stylesheets/styles';
import {View, Text} from 'react-native';

const VideoPlayer = ({autoPlay, hasTouchControls, media, thumbnail}) => {
  const ref = useRef();

  const videoUrl = media.reddit_video.fallback_url;
  return (
    <View>
      <Video
        ref={ref}
        resizeMode="contain"
        poster={thumbnail}
        posterResizeMode="cover"
        selectedAudioTrack={{type: 'index'}}
        source={{uri: videoUrl}}
        preventsDisplaySleepDuringVideoPlayback
        onBuffer={event => console.log(event)}
        onError={error => console.log('VideoPLayer/Error: ', error)}
        controls={hasTouchControls}
        repeat
        paused={!autoPlay}
        style={Post.image}
      />
      <Text style={[Common.subtext, Common.mrgBtm1Rem]}>Video</Text>
    </View>
  );
};

export default VideoPlayer;
