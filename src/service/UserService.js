import axios from "axios";

const BACKEND_URL = "http://ykh8746.iptime.org:8080";

class UserService {

    login(userId, password, history) {
        axios.post(`${BACKEND_URL}/signIn`,
            {
                userId: userId,
                pw: password,
            })
            .then(response => {
                history.push("/myMusic");
                localStorage.setItem("USER", response.data.token);
            })
            .catch(err => {
                alert("로그인 실패")
                history.push("/login");
            });

    }

    signUp(userId, password, nickname,history){
        axios.post(`${BACKEND_URL}/signUp`,
            {
                userId : userId,
                pw : password,
                nickname : nickname
            })
            .then((response) => {
                alert("회원가입 성공!!");
                history.push("/myMusic");
            })
            .catch((err) => {
                let msg = err.response.data.forEach(
                    item => { msg += `${item.msg}\n`;}
                )
                alert(msg);
            })
    }
}
const userService = new UserService();
export default userService;


