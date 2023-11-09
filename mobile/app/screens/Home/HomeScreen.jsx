import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InitialScreen from '../Initial/InitialScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator="false"></ScrollView>
    </SafeAreaView>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }} // Tắt thanh tiêu đề cho màn hình "Home"
      />
      <Tab.Screen
        name="initial"
        component={InitialScreen}
        options={{ headerShown: false }} // Tắt thanh tiêu đề cho màn hình "Initial"
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
