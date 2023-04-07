import axios from "axios";
import {API_BASE_URL} from "../service/app-config";

export const getUser = (user) => {
    console.log(user);

    axios.create()

    axios.get(`${API_BASE_URL}/signIn`, user)
        .then(response => {
            // 아이디 또는 비번 일치 x
            if (response.status === 400){
                console.log('로그인 실패');
                alert('아이디 또는 비밀번호가 맞지 않습니다.');
                window.location.href = "/login";
            }
            // 로그인 성공
            else if (response.status === 200) {
                sessionStorage.setItem("access_token", response.data.token);
                window.location.href="/main"; // href
            }
        })
        // .catch(err => {
        //     alert("네트워크가 불안정합니다.");
        //     console.log(err);
        // });
}

