import axios from "axios"; 
const httpClient = axios.create({
  baseURL: "https://localhost:5110",
});

export default httpClient;
