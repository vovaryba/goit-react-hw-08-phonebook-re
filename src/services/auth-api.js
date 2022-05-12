import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function registerUser(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
}

export async function logInUser(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
}

export async function logOutUser() {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
}

export async function refreshCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
