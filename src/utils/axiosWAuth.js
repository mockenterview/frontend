import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // console.log(`this is the token`, token)

  return axios.create({
    headers: {
      baseURL:'https://mockenterview.herokuapp.com/api',
      headers:{
      authorization: token,
    }}
  });
};

export default axiosWithAuth