import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    navigation.navigate('Initial');
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 30,
            justifyContent: 'flex-start',
          }}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
          <TouchableOpacity onPress={() => handleSignIn()}>
            <Text style={{ color: 'white', fontSize: 20 }}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
