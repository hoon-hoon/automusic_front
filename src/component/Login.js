import React, { useState } from 'react';
import {useHistory, Link} from "react-router-dom";
import UserService from "../service/UserService";

export const Login = (props) => {
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
        props.setIsLogin(true);
    }

    return(
        <div>
            <div className="flex flex-row justify-around px-10">
                <div className="flex items-center">
                    <label className=" w-32 text-white justify-center m-0">아이디</label>
                    <input type='text' name='id' value={userId} onChange={userIdChanged}
                        className="p-1 m-0 font-semibold rounded-sm" />
                </div>
                <div className="flex items-center">
                    <label htmlFor='password' className="w-40 text-white justify-center m-0">비밀번호</label>
                    <input type='password' name='password' value={password} onChange={userPasswordChanged} 
                        className="p-1 m-0 rounded-sm"/>
                </div>
                <div className="flex items-center">
                    <button onClick={(e) => { loginButtonClicked(e, userId, password) }} 
                        className=" w-20 mx-10 font-bold flex justify-center p-2 bg-pink-300 hover:bg-pink-400 rounded-sm">
                        로그인</button>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <p className="text-white flex items-center mx-2 font-semibold">회원정보가 없으신가요?</p>
                <button className=" w-20 p-2 flex justify-center mx-2 font-bold bg-pink-200 hover:bg-pink-400 rounded-sm"><Link to="/signup">회원가입</Link></button>
            </div>
        </div>
    );
};

export default Login;