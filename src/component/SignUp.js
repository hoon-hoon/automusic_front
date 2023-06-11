import React, { useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import "../css/SignUp.css";
import UserService from "../service/UserService";

export const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [nickname, setNickname] = useState('');
    const history = useHistory();

    const checkedPassword = (checkPw, pw) => {
        if (checkPw === pw) {
          setPasswordCheck(true);
        }
        else {
          setPasswordCheck(false);
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault(); // 폼의 기본 동작인 페이지 새로고침을 막음
        signUpButtonClicked(id, password, nickname);
    };

    const userIdChanged = (event) => {
        setId(event.currentTarget.value)
    }

    const passwordChanged = (event) => {
        setPassword(event.currentTarget.value)
    }

    const nickNameChanged = (event) => {
        setNickname(event.currentTarget.value)
    }

    const signUpButtonClicked = (id, password, nickname) => {
        UserService.signUp(id,password,nickname,history);
    }

    return (
        <div className="flex flex-row px-10">
            <div className="w-full">
                <form onSubmit={handleSignUp}>
                <div className="grid grid-cols-2">
                    <div className="flex flex-row items-center">
                        <label htmlFor='id' className="w-40 justify-center m-0 whitespace-nowrap">아이디</label>
                        <input className="w-44 ml-2 font-semibold rounded-sm" type='text' name='id' id="id" value={id} onChange={userIdChanged} />
                    </div>
                    <div className="flex flex-row items-center">
                        <label htmlFor='nickname' className="w-40 justify-center m-0 whitespace-nowrap">닉네임</label>
                        <input className="w-44 ml-2 font-semibold rounded-sm" type='text' name='nickname' id="nickname" value={nickname} onChange={nickNameChanged} />
                    </div>
                    <div className="flex flex-row items-center">
                        <label htmlFor='password' className="w-40 justify-center m-0 whitespace-nowrap">비밀번호</label>
                        <input className="w-44 ml-2 font-semibold rounded-sm" type='password' name='password' id="password" value={password} onChange={passwordChanged} />
                    </div>
                    <div className="flex flex-row items-center">
                        <label htmlFor='passwordCheck' className="w-40 justify-center m-0 whitespace-nowrap">비밀번호 확인</label>
                        <div className="flex flex-row">
                            <input className="w-44 ml-2 font-semibold rounded-sm" type='password' name='passwordCheck' id="passwordCheck" onChange={(e) => checkedPassword(e.target.value, password)} required />
                            {passwordCheck ? (<p className="text-blue-500 ml-2">일치</p>) : (<p className="text-red-500 ml-2">불일치</p>)}
                        </div>
                    </div>
                </div>


                <div className="flex justify-center mb-2">
                    <button className="w-20 mx-10 font-bold flex justify-center p-2 bg-pink-300 hover:bg-pink-400 rounded-sm" type='submit'>
                        회원가입</button>
                </div>
                </form>
                <div className="flex flex-row justify-center mb-10">
                    <p className="text-white flex items-center mx-2 font-semibold">등록된 회원 정보가 있으신가요?</p>
                    <button className=" w-20 p-2 flex justify-center mx-2 font-bold bg-pink-200 hover:bg-pink-400 rounded-sm"><Link to="/login">로그인</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;