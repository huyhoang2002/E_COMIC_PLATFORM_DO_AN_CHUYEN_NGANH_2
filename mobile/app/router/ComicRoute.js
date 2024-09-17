// ComicRoute.js
import axios from 'axios';

export const getComic = async () => {
  try {
    const response = await axios.get('http://192.168.1.7:5001/Comic');
    return response.data;
  } catch (error) {
    console.error('Error fetching comic data:', error);
    throw error;
  }
};
