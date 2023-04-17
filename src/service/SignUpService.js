import * as SignUpNetwork from "../network/SignUpNetwork.js";

export const userIdChanged = (event, setId) => {
    setId(event.currentTarget.value)
}

export const passwordChanged = (event, setPassword) => {
    setPassword(event.currentTarget.value)
}

export const nickNameChanged = (event, setNickname) => {
    setNickname(event.currentTarget.value)
}

export const signUpButtonClicked = (id, password, nickname) => {
    const newUser = {
        userId : id,
        pw : password,
        nickname : nickname
    }

    if (!id || !password || !nickname) {
        alert("빈 칸을 모두 입력해주세요.");
        return;
    }

    if (password.length < 8 || password.length > 20) {
        alert('비밀번호는 최소 8자리, 최대 20자리여야 합니다.');
        return;
    }

    SignUpNetwork.signUp(newUser);
}

export const checkId = (id, password, nickname) => {
    const newUser = {
        userId : id,
        pw : password,
        nickname : nickname
    }

    SignUpNetwork.signUp(newUser);
}

export const handleSignUp = (id, password, nickname) => {
    if (!id) {
        alert('아이디를 입력해주세요.');
        return;
    }
    if (!password) {
        alert('비밀번호를 입력해주세요.');
        return;
    }
    if (!nickname) {
        alert('닉네임을 입력해주세요.');
        return;
    }
    signUpButtonClicked(id, password, nickname);
};