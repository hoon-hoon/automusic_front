import * as LoginNetwork from "../network/LoginNetwork.js"

export const userIdChanged = (event, setUserId) => {
    setUserId(event.currentTarget.value)
}

export const userPasswordChanged = (event, setPassword) => {
    setPassword(event.currentTarget.value)
}

export const loginButtonClicked = (event, userId, password) => {
    // 기본 클릭 동작 방지
    event.preventDefault()

    LoginNetwork.getUser(userId, password);
}
