import React, { useState, useEffect } from 'react';
import * as LoginService from "../service/LoginService.js";

export const Login = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="login">
        <div className='login-container'>
            <h1 className="title">LOGIN</h1>
            <div>
                <input placeholder='아이디' type='text' name='id' value={id}
                       onChange={(e)=>{LoginService.userIdChanged(e, id, setId)}} />
            </div>
            <div>
                <input placeholder='비밀번호' type='password' name='password' value={password}
                       onChange={(e)=>{LoginService.userPasswordChanged(e,password, setPassword)}} />
            </div>
            <div>
                <button type='button' onClick={(e)=>{LoginService.loginButtonClicked(e, id, password)}}>로그인</button>
            </div>
        </div>
        
        <div>
            <p><a>비밀번호 찾기</a> | <a>아이디 찾기</a> | <a href="/Singup">회원가입</a></p>
        </div>
    </div>
    )
}