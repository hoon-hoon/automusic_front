import axios from "axios";
import {API_BASE_URL} from "../AppConfig";

export const getUser = (userId, password) => {

    axios.post(`${API_BASE_URL}/signIn`, {
            userId : userId,
            pw : password
        })
        .then(response => {
            // 로그인 성공
            if (response.status === 200) {
                //sessionStorage.setItem("access_token", response.data.token);
                window.location.href="/"; // href
                localStorage.setItem("USER", JSON.stringify(response.data));
            }
        })
        .catch(err => {
            if(err.response.status === 400){
                alert("로그인 실패")
                window.location.href = "/login";
            }
        });
}

