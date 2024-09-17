import React, { useState, useEffect } from 'react';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { getComic } from '../../router/ComicRoute';
import HomDetail from '../Details/HomeDetail';
const { width, height } = Dimensions.get('window');
const CarouselComic = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comicData = await getComic();
        setData(comicData);
      } catch (error) {
        console.error('Error fetching comic data:', error);
        throw error;
      }
    };

    fetchData();
  }, []);

  const handleImagePress = item => {
    navigation.navigate('Detail');
  };

  const renderData = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.slide}
        onPress={() => handleImagePress(item)}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Carousel
          data={data}
          renderItem={renderData}
          firstData={1}
          loop={true}
          sliderWidth={width}
          itemWidth={width * 0.6}
          inactiveSlideOpacity={0.6}
          slideStyle={{ display: 'flex', alignContent: 'center' }}
        />
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
    height: 400,
    width: '95%',
    backgroundColor: '#333333',
    borderRadius: 30,
    overflow: 'hidden',
  },
  slide: {
    marginBottom: 380,
  },
  image: {
    width: width * 0.6,
    height: height * 0.4,
    borderRadius: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
  },
});

export default CarouselComic;
