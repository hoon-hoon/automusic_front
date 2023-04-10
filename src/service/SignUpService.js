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

    SignUpNetwork.signUp(newUser);
}