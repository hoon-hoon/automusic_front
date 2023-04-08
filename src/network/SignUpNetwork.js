import axios from "axios";
import {API_BASE_URL} from "../AppConfig";

export const signUp = (user) => {
    axios.post(`${API_BASE_URL}/signUp`, user)
        .then(response => {
            // 회원가입 성공
            if (response.status === 200) {
                window.location.href="/login"; // href
            }
        })
        .catch(err => {
            if(err.response.status === 400){
                alert("회원가입 실패")
                window.location.href = "/SignUp";
            }
        });
}