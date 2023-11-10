import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View
      style={{
        justifyContent: 'flex-center',
        width: '80%',
        padding: '5%',
      }}
    >
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBarComponent;
