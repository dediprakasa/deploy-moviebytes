import axios from "axios";
import env from "react-dotenv";

console.log(env);

const callOmdbApi = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${env.API_KEY}&`,
});

export default callOmdbApi;
