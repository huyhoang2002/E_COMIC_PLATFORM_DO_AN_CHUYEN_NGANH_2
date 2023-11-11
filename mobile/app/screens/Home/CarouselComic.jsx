import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Comic from '../../dataTest/Comic';

const { width, height } = Dimensions.get('window');

const CarouselComic = () => {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={Comic}
        renderItem={renderItem}
        firstItem={1}
        sliderWidth={width}
        itemWidth={width * 0.6}
        inactiveSlideOpacity={0.6}
        slideStyle={{ display: 'flex', alignContent: 'center' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: 600,
    marginBottom: 350,
  },
  image: {
    width: width * 0.6,
    height: height * 0.4,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
});

export default CarouselComic;
