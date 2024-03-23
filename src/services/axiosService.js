import axios from "axios";

const url = "http://localhost:8000/api"
const api = axios.create({
    baseURL:url
})

export default api