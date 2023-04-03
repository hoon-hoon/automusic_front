import { API_BASE_URL } from "./app-config";

const header = { "Content-Type" : "application/json" }

export function call(api, method, request) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken) {
        headers.append("Authorization", "Bearer " + accessToken);
    }

    const options = {
        method: method,
        headers: headers
    };

    if (request) {
        options.body = JSON.stringify(request);
    }

    return fetch(API_BASE_URL + api, options)
        .then((response) => response.json().then((json) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        }))
        .catch((error) => {
            if (error.status === 403) {
                window.location.href = "/main";
            }
            return Promise.reject(error);
        });
}


export function signin(member) {
    return call("/user/login", "POST", member)
        .then((response) => {
            if (!response.error ) {
                localStorage.setItem("USER", JSON.stringify(response.data));
                window.alert("로그인 성공")
                window.location.href = "/"
            } else {
                window.alert("로그인 실패")
            }
        })
        .catch((error) => {
            window.alert(error.error);
        });
}

export function signup(member) {
    return call("/signup", "POST", member)
        .then((response) => {
            console.log(response);
            if (response.data) {
                if (response.data.id) window.location.href = "/";
            } else if (response.error) {
                window.alert(response.error);
            }
        })
        .catch((error) => {
            if (error.status === 403) {
                window.location.href = "/signup";
            }
            return Promise.reject(error);
        });
}


export function signout() {
    localStorage.setItem("USER_KEY", "");
    localStorage.setItem("ACCESS_TOKEN", "");
    window.location.href = "/";
}

export function userUpdate(user) {

    return call(`/user/${user.email}`, "PUT", header, JSON.stringify(user))
}

