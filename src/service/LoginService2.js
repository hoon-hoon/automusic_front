import axios from "axios";
import * as LoginNetwork from "../network/LoginNetwork.js"

export const userIdChanged = (event, id, setId) => {
    setId(event.currentTarget.value)
}

export const userPasswordChanged = (event, password, setPassword) => {
    setPassword(event.currentTarget.value)
}

export const loginButtonClicked = (event, id, password) => {
    // 기본 클릭 동작 방지
    event.preventDefault()

    let user = {
        userId: id,
        pw: password
    };

    LoginNetwork.getUser(user);
}
