import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
const ButtonRead = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10 * 2,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            width: '15%',
            padding: 15,
            margin: '1%',
            backgroundColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10 * 2,
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '60%',
            padding: 15,
            backgroundColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10 * 2,
          }}
        >
          <Text
            style={{
              fontSize: 10 * 2,
              color: 'white',
              fontWeight: '700',
            }}
          >
            Read
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '15%',
            padding: 15,
            margin: '1%',

            backgroundColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10 * 2,
          }}
        ></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ButtonRead;
