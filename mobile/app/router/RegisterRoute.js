import axios from 'axios';

const getRegister = async (email, password) => {
  try {
    const response = await axios.post('http://192.168.1.7:5000/users', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

export default getRegister;
