import axios from 'axios';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'https://34.204.125.43:3000/api', 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
