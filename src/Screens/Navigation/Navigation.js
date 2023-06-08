import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import Home from '../Home/Home';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import Post from '../../Elements/Post';
import CommentsScreen from '../CommentsScreen/CommentsScreen';

const MainStack = createStackNavigator();

const Navigation = () => {
  return (
    <MainStack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <MainStack.Screen name='Login' component={LoginScreen} />
      <MainStack.Screen name='Registratione' component={RegistrationScreen} />
      <MainStack.Screen name='Home' component={Home} />
      <MainStack.Screen name='Post' component={Post} />
      <MainStack.Screen name='CommentsScreen' component={CommentsScreen} />
      <MainStack.Screen name='CreatePostsScreen' component={CreatePostsScreen} />
      <MainStack.Screen name='ProfileScreen' component={ProfileScreen} />
    </MainStack.Navigator>
  );
};

export default Navigation;