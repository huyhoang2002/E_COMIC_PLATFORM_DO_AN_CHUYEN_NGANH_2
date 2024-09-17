import * as React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View
      style={{
        position: 'relative',
        marginVertical: 10 * 3,
        marginTop: 20,
        marginBottom: 10,
        margin: '5%',
        height: 50,
        width: '65%',
        justifyContent: 'center',
      }}
    >
      <View>
        {/* Gạch ngang */}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      </View>
      <TextInput
        style={{
          padding: 10 * 1.5,
          color: 'white',
          fontSize: 10 * 1.5,
          paddingLeft: 10 * 4,
          borderBottomColor: 'white',
          borderBottomWidth: 1,
        }}
        placeholder="Search"
        placeholderTextColor={'white'}
      />
      <Ionicons
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
        }}
        size={10 * 2.5}
        color={'white'}
        name="search"
      />
    </View>
  );
};

export default SearchBarComponent;
