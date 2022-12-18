import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Common} from '../stylesheets/styles';
import {Reddit} from '../assets/icons';
import {useSelector} from 'react-redux';

const Home = props => {
  return (
    <View style={Common.container}>
      <View style={Common.header}>
        <View style={Common.rowCntr}>
          <Reddit height={32} width={32} style={Common.mrgRgtHalfRem} />
          <Text style={Common.h2} onPress={() => props.navigation.push('Post')}>
            Home
          </Text>
        </View>
        <Text style={Common.h4}>Log out</Text>
      </View>
    </View>
  );
};

export default Home;
