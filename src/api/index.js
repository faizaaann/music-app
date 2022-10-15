import axios from 'axios';

import BASE_URL from '../config/baseUrl';

/**
 * Axios instance will be created for global usage
 * author: Faizan Ahmad <a-f.a@outlook.com>
 */

const API = axios.create({
  baseURL: BASE_URL.ITUNE_API,
});

export default API;
