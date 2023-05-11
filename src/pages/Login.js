import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as LoginService from "../service/LoginService.js";
import "../css/Login.css"

export const Login = () => {
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="login">
            <div className='login-container'>
                <div className='form-container'>
                    <p className="title">로그인</p>
                    <div class="input-container">
                        <label htmlFor='id'>아이디</label>
                        <hr className='hrBig'></hr>
                        <input type='text' name='id' value={userId}
                            onChange={(e)=>{LoginService.userIdChanged(e, setUserId)}} />
                        <hr className='hrSmall'></hr>
                    </div>
                    <div class="input-container">
                        <label htmlFor='password'>비밀번호</label>
                        <hr className='hrBig'></hr>
                        <input type='password' name='password' value={password}
                            onChange={(e)=>{LoginService.userPasswordChanged(e, setPassword)}} />
                        <hr className='hrSmall'></hr>
                    </div>
                    <div>
                        <button type='button' className="login-button" onClick={(e)=>{LoginService.loginButtonClicked(e, userId, password)}}>로그인</button>
                    </div>
                    <div className='bottom-button'>
                        <div className='bottom-password-button'>
                            <div>비밀번호를 잊으셨나요?</div>
                            <div className="serve-button">비밀번호 찾기</div>
                        </div>
                        <div className='bottom-signup-button'>
                            <div>등록된 회원 정보가 없으신가요?</div>
                            <div className="serve-button"><Link to="/signup">회원가입</Link></div>
                        </div>
                    </div>
                </div>
                <div className='image-container'>
                    <img className="login-img" src="/images/loginImg.jpeg" alt="loginImg" loading="lazy" />
                </div>
            </div>
        </div>
    );
};

export default Login;