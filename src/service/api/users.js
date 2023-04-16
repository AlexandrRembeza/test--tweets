import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const getUsers = async page => {
  try {
    const { data } = await axios.get(`/users?page=${page}&limit=3`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const updateUser = async (id, followers) => {
  try {
    await axios.put(`/users/${id}`, {
      followers,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const API = {
  getUsers,
  updateUser,
};

export default API;
