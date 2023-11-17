import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InitialScreen from '../screens/Initial/InitialScreen';
import LoadingScreen from '../screens/Initial/LoadingScreen';
import Login from '../screens/Profile/Login/Login';
import Register from '../screens/Profile/Register/Register';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import HomeDetail from '../screens/Details/HomeDetail';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Loading"
        >
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Initial" component={InitialScreen} />
          <Stack.Screen name="Detail" component={HomeDetail} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          {/* Thêm các màn hình khác nếu cần */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigator;
