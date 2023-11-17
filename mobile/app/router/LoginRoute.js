import axios from 'axios';

const getLogin = async (email, password) => {
  try {
    const response = await axios.post('http://192.168.1.7:5000/users', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export default getLogin;
