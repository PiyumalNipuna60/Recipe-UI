import axios from 'axios';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'https://www.recipe.tequilasl.com/api/', 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
