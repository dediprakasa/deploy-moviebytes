import axios from "axios";

const callOmdbApi = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=5f3e1158&`,
});

export default callOmdbApi;
