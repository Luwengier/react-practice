import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID ffKPq3gxgioM79RPZ_WoxyB4h7X2QNlGwd53sQ1idkc'
  }
})

