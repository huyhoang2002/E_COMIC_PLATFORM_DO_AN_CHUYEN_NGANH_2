import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Comic from '../../dataTest/Comic';

const ScrollComic = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: 'gray' }}
    >
      <View>
        {/* <Text style={{ color: 'white' }}>Hello</Text> */}

        {Comic.map(comic => {
          <TouchableOpacity key={comic.id}>
            <Image source={{ uri: comic.imageUrl }} />
          </TouchableOpacity>;
        })}
      </View>
    </ScrollView>
  );
};

export default ScrollComic;
