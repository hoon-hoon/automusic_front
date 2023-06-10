import axios from "axios";

const BACKEND_URL = "http://ykh8746.iptime.org:8080/song";

class UserService {
    login(userId, password) {
        axios.post(`${BACKEND_URL}/signIn`,
            {
                userId: userId,
                pw: password,
            })
            .then(response => {
                window.location.href = "/";
                localStorage.setItem("USER", response.data.token);
            })
            .catch(err => {
                alert("로그인 실패")
                window.location.href = "/login";
            });

    }

    signUp(userId, password, nickname){
        axios.post(`${BACKEND_URL}/signUp`,
            {
                userId : userId,
                pw : password,
                nickname : nickname
            })
            .then((response) => {
                alert("회원가입 성공!!");
                window.location.href = "/myMusic";
            })
            .catch((err) => {
                let msg = err.response.data.forEach(
                    item => { msg += `${item.msg}\n`;}
                )
                alert(msg);
            })
    }
}
export default new UserService();


