import React, { useState } from 'react';
import * as LoginService from "../service/LoginService.js";
import "../css/Login.css"

export const Login = () => {
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="login">
            <div className='login-container'>
                <h1 className="title">LOGIN</h1>
                <hr></hr>
                <div>
                    <input placeholder='아이디' type='text' name='id' value={userId}
                           onChange={(e)=>{LoginService.userIdChanged(e, setUserId)}} />
                </div>
                <div>
                    <input placeholder='비밀번호' type='password' name='password' value={password}
                           onChange={(e)=>{LoginService.userPasswordChanged(e, setPassword)}} />
                </div>
                <div>
                    <button type='button' className="login-btn" onClick={(e)=>{LoginService.loginButtonClicked(e, userId, password)}}>로그인</button>
                </div>
                <div className="login-buttons">
                    <button type='button' className="find-password-button">비밀번호 찾기</button>
                    <button type='button' className="find-id-button">아이디 찾기</button>
                    <a href="/SignUp"><button type='button' className="signup-button">회원가입</button></a>
                </div>
            </div>
        </div>
    );
};

export default Login;