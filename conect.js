const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/popular?language=pt&region=BR';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjMzYjViMzI3NmVlNGNjNDI4MmM1MjNhNjQ0YTEzZiIsInN1YiI6IjYyMWNjNjgzZmRjMTQ2MDA0MjVmMTljOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ktYtpZTPnh6h8nNsSxVMFPYa5HNUrutRqG1u8xdEuuU'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));