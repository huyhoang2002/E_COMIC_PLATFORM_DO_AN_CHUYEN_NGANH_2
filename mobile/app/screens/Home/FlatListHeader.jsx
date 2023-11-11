import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Novel',
    id: 1,
  },
  {
    title: 'Tiểu Thuyết',
    id: 2,
  },
  {
    title: 'New Novel',
    id: 3,
  },
  {
    title: 'Comic',
    id: 4,
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatListHorizontal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  item: {
    marginTop: '3%',
    marginLeft: 16,
    width: 120,
    backgroundColor: 'gray',
    borderRadius: 20,
  },

  title: {
    padding: '5%',
    marginLeft: '10%',
    fontSize: 15,
    color: 'white',
  },
});

export default FlatListHorizontal;
