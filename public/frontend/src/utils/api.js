import axios from 'axios';

const login = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/login', userData);
    return response.data.token;
  } catch (error) {
    throw error;
  }
};

export { login };
