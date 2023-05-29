import axios from "axios";
import { API_BASE_URL } from "../AppConfig";

export const signUp = (user) => {
  axios
    .post(`${API_BASE_URL}/signUp`, user)
    .then((response) => {
      // 회원가입 성공
      if (response.status === 200) {
        console.log(response); // 백엔드에서 넘겨준 response 콘솔에 출력
        alert("사용 가능한 아이디입니다.");
        window.location.href = "/login";
      }
    })
    .catch((err) => {
      console.log(err);
      if (err.response.status === 400) {
        let message = "";
        err.response.data.forEach((item, index) => {
          message += `${item.msg}\n`;
        });
        console.log(message);
        alert(message);
        window.location.href = "/SignUp";
      }
    });
};
