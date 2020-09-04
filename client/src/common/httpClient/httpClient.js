import axios from "axios"; 
const httpClient = axios.create({
  baseURL: "http://localhost:5110",
});

export default httpClient;
