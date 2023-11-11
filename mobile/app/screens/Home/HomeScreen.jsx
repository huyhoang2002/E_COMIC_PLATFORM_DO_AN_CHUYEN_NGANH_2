import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Profile from '../Profile/ProfileScreen';
import Header from './Header';
import FlatListHeader from './FlatListHeader';
import CarouselComic from './CarouselComic';
import ScrollComic from './ScrollComic';
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <Header />
      <FlatListHeader />
      <CarouselComic />
      <ScrollComic />
    </SafeAreaView>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'black' },

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'profile') {
            iconName = 'settings';
          }

          return (
            <Ionicons
              name={iconName}
              color={color}
              size={size}
              marginTop={10}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{ headerShown: false, tabBarLabel: '' }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false, tabBarLabel: '' }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
