import axios from "axios";
import { backUrl } from "@/config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

//카테고리별 게시물 조회
export function loadPostsAPI(data: string){
    //shops: 술 판매 업체
    //info: 술과 관련된 정보/리뷰
    //recipe: 술 조제법/레시피 게시판
    //community: 자유 게시판
    //notice: 공지사항
    //qna: 술과 관련된 질문, 답변
    return axios.get(`/api/boards/${data}`).then((response) => response.data);
}

//게시물 조회
export function loadPostAPI(data: string){
    return axios.get(`/api/board/${data}`).then((response) => response.data);
}