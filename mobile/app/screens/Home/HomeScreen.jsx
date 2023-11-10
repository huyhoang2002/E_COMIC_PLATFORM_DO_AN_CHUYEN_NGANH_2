import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Profile from '../Profile/ProfileScreen';
import Header from './Header';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
      </ScrollView>
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
