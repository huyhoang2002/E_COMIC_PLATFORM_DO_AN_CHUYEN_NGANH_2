import { View, Text, StyleSheet } from 'react-native';

const CategoryComic = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    height: 200,
    width: '95%',
    backgroundColor: '#333333',
    borderRadius: 30,
    overflow: 'hidden',
  },
});
export default CategoryComic;
