import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {Common, login as styles} from '../stylesheets/styles';
import {Reddit} from '../assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../redux/user/userAction';
import colors from '../assets/constants/colors';
import Snackbar from 'react-native-snackbar';

const Login = props => {
  const dispatch = useDispatch();

  const {isLoading, threwError} = useSelector(state => state.user);

  const loginHandler = () => {
    dispatch(getUser());
  };

  const showSnackbar = text => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_LONG,
    });
  };

  useEffect(() => {
    if (threwError) {
      switch (threwError.message) {
        case 'User cancelled flow':
          showSnackbar('The authorization was cancelled.');
          break;
        case 'access_denied':
          showSnackbar('The access was denied.');
          break;
        default:
          break;
      }
    }
  }, [threwError]);

  return (
    <View style={[Common.container, styles.container]}>
      <View style={styles.header}>
        <Reddit height={80} width={80} style={Common.mrgBtmHalfRem} />
        <Text style={[Common.h1, Common.mrgBtmHalfRem]}>Reddit</Text>
        <Text style={Common.h4}>
          Dive into memes,{'\n'}news updates, anything.
        </Text>
      </View>
      <View style={styles.ctaContainer}>
        {isLoading ? (
          <View style={styles.cta}>
            <ActivityIndicator color={colors.REDDIT_RED} size={32} />
          </View>
        ) : (
          <TouchableOpacity style={styles.cta} onPress={loginHandler}>
            <Reddit height={32} width={32} style={styles.ctaLogo} />
            <Text style={[Common.h3, styles.ctaText]}>Login using Reddit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Login;
