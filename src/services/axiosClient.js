import axios from 'axios';
import { username, token } from '../config/secrets';

export const get = async (url, opts = {}) => {
  return await axios.get(url, {
    auth: { username: username, password: token },
    ...opts
  });
};

export const post = async (url, body, opts = {}) => {
  return await axios.post(url, body, {
    auth: { username: username, password: token },
    ...opts
  });
};