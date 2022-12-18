import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from '../screens/Home';
import Login from '../screens/Login';
import Post from '../screens/Post';
import {useSelector} from 'react-redux';

const MainStack = createNativeStackNavigator();
const MainStackScreens = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Post" component={Post} />
    </MainStack.Navigator>
  );
};

const LoginStack = createNativeStackNavigator();
const LoginStackScreens = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  );
};

const RootComponent = () => {
  const isLoggedIn = useSelector(state => state.user.accessToken)
    ? true
    : false;
  return <>{isLoggedIn ? <MainStackScreens /> : <LoginStackScreens />}</>;
};

export default RootComponent;
