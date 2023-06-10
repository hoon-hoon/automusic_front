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
        <div className="flex flex-col">
            <div className="signup-container">
                <div className='image-container'>
                    <img className="signup-img" src="/images/signupImg.jpeg" alt="signupImg" loading="lazy" />
                </div>
                <div className='form-container'>
                    <p className="title">회원가입</p>
                    <form onSubmit={handleSignUp}>
                    <div className="input-container">
                        <label htmlFor='id'>아이디</label>
                        <hr className='hrBig'></hr>
                        <input className="id" type='text' name='id' id="id" value={id}
                            onChange={userIdChanged} />
                        <hr className='hrSmall'></hr>
                    </div>
                    <div className="input-container">
                        <label htmlFor='password'>비밀번호</label>
                        <hr className='hrBig'></hr>
                        <input type='password' name='password' id="password" value={password}
                            onChange={passwordChanged} />
                        <hr className='hrSmall'></hr>
                    </div>
                    <div className="input-container">
                        <label htmlFor='passwordCheck'>비밀번호 확인</label>
                        <hr className='hrBig'></hr>
                        <input type='password' name='passwordCheck' id="passwordCheck"
                            onChange={(e) => checkedPassword(e.target.value, password)} required/>
                            {passwordCheck 
                                ? (<p>일치</p>) 
                                : (<p>불일치</p>)
                            }
                        <hr className='hrSmall'></hr>
                    </div>
                    <div className="input-container">
                        <label htmlFor='nickname'>닉네임</label>
                        <hr className='hrBig'></hr>
                        <input type='text' name='nickname' id="nickname" value={nickname}
                            onChange={nickNameChanged} />
                        <hr className='hrSmall'></hr>
                    </div>
                    <div>
                    <button className="signup-button" type='submit'>회원가입</button>
                    </div>
                    </form>
                    <div className='bottom-login-button'>
                            <div className="button-text">등록된 회원 정보가 있으신가요?</div>
                            <div className="serve-button"><Link to="/login">로그인</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;