import axios, { AxiosHeaders } from "axios";
import { useAuthStore } from "../store/auth";

const authApi = axios.create({
  baseURL: "http://localhost:3001",
})

authApi.interceptors.request.use(config=>{
  config.withCredentials = true;
  const token = useAuthStore.getState().token

  if (token) {
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
  }

  return config
})

export default authApi
