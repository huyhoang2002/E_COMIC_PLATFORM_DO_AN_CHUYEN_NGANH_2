import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import SearchBarComponent from './SearchBar';

const Header = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
    >
      <View style={{ marginLeft: '5%' }}>
        <TouchableOpacity>
          <Entypo name="notification" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <SearchBarComponent />
      <View style={{ marginRight: '5%' }}>
        <TouchableOpacity>
          <Entypo name="notification" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
