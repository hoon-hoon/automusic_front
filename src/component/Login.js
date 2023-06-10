import React, { useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import "../css/Login.css"
import UserService from "../service/UserService";

export const Login = () => {
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const userIdChanged = (event) => {
        setUserId(event.currentTarget.value)
    }

    const userPasswordChanged = (event) => {
        setPassword(event.currentTarget.value)
    }

    const loginButtonClicked = (event, userId, password) => {
        event.preventDefault()// 기본 클릭 동작 방지
        UserService.login(userId,password, history);
    }

    return(
        <div className="flex flex-col">
            <div className='login-container'>
                <div className='form-container'>
                    <div className="input-container">
                        <label htmlFor='id' className='text-white'>아이디</label>
                        <hr className='hrBig'></hr>
                        <input type='text' name='id' value={userId} onChange= {userIdChanged}/>
                        <hr className='hrSmall'></hr>
                    </div>
                    <div className="input-container">
                        <label htmlFor='password' className='text-white'>비밀번호</label>
                        <hr className='hrBig'></hr>
                        <input type='password' name='password' value={password} onChange={userPasswordChanged} />
                        <hr className='hrSmall'></hr>
                    </div>
                    <div>
                        <button type='button' className="login-button" onClick={(e)=>{loginButtonClicked(e, userId, password)}}>로그인</button>
                    </div>
                    <div className='bottom-button'>
                        <div className='bottom-password-button'>
                            <div className='text-white'>비밀번호를 잊으셨나요?</div>
                            <div className="serve-button text-white">비밀번호 찾기</div>
                        </div>
                        <div className='bottom-signup-button'>
                            <div className='text-white'>등록된 회원 정보가 없으신가요?</div>
                            <div className="serve-button text-white"><Link to="/signup">회원가입</Link></div>
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