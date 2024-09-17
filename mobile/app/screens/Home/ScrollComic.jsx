import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import { getComic } from '../../router/ComicRoute';

const { width } = Dimensions.get('window');

const ScrollComic = () => {
  const [data, setData] = useState([]);

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

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={{ color: 'white' }}>Hello</Text>
        <View style={styles.rowContainer}>
          {data?.map((comicData, index) => (
            <TouchableOpacity
              style={styles.itemContainer}
              key={`${comicData.id}_${index}`}
            >
              <Image
                style={styles.image}
                source={{ uri: comicData.imageUrl }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flex: 1,
    marginTop: 5,
    flexGrow: 1,
    width: '95%',
    backgroundColor: '#333333',
    borderRadius: 30,
    overflow: 'hidden',
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    padding: '2%',
    width: width / 4 - 15,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
});

export default ScrollComic;
