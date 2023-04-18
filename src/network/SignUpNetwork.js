import axios from "axios";
import {API_BASE_URL} from "../AppConfig";

export const signUp = (user) => {
    axios.post(`${API_BASE_URL}/signUp`, user)
        .then(response => {
            // 회원가입 성공
            if (response.status === 200) {
                alert("사용 가능한 아이디입니다.")
            }
        })
        .catch(err => {
            if(err.response.status === 400){
                alert("아이디가 중복됩니다. 다른 아이디를 작성해주세요.")
                window.location.href = "/SignUp";
            }
        });
}
