import axios from "axios";
import { backUrl } from "@/config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

//로컬로그인
export function logInAPI(data: { id: string, password: string }) {
    return axios.post('/api/login', data).then((response) => response.data);
}
//로그아웃
export function logOutAPI() {
    return axios.post('/api/logout').then((response) => response.data);
}
