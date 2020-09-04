import axios from "axios"; 
const httpClient = axios.create({
  baseURL: "https://localhost:5000",
});

export default httpClient;
