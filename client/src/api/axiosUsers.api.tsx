import axios from "axios";

export const axiosUsers = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/users/`,
    withCredentials: true
})