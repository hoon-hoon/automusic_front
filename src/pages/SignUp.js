import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as SignUpService from "../service/SignUpService";
import "../css/SignUp.css";

export const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [nickname, setNickname] = useState('');

    const checkedPassword = (checkPw, pw) => {
        if (checkPw === pw) {
          setPasswordCheck(true);
        }
        else {
          setPasswordCheck(false);
        }
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <div className='image-container'>
                    <img className="signup-img" src="/images/signupImg.jpeg" alt="signupImg" loading="lazy" />
                </div>
                <div className='form-container'>
                    <p className="title">회원가입</p>
                    <div class="input-container">
                        <label htmlFor='id'>아이디</label>
                        <hr className='hrBig'></hr>
                        <input class="id" type='text' name='id' id="id" value={id} 
                            onChange={(e) => { SignUpService.userIdChanged(e, setId) }}
                            minLength={8}
                            required />
                        {id.length < 8 
                            ? <p>8자이상 입력해주세요</p>
                            : <></>
                        }
                        <hr className='hrSmall'></hr>
                    </div>
                    <div class="input-container">
                        <label htmlFor='password'>비밀번호</label>
                        <hr className='hrBig'></hr>
                        <input type='password' name='password' id="password" value={password}
                            onChange={(e) => { SignUpService.passwordChanged(e, setPassword) }}
                            minLength={8}
                            required />
                        {password.length < 8 
                            ? <p>8자이상 입력해주세요</p>
                            : <></>
                        }
                        <hr className='hrSmall'></hr>
                    </div>
                    <div class="input-container">
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
                    <div class="input-container">
                        <label htmlFor='nickname'>닉네임</label>
                        <hr className='hrBig'></hr>
                        <input type='text' name='nickname' id="nickname" value={nickname}
                            onChange={(e) => { SignUpService.nickNameChanged(e, setNickname) }} />
                        {nickname.length < 2 
                            ? <p>2자이상 입력해주세요</p>
                            : <></>
                        }
                        <hr className='hrSmall'></hr>
                    </div>
                    <div>
                        <button className="signup-button" type='button'
                            onClick={(e) => { {passwordCheck&&(id.length>=8)&&(password.length>=8)&&(nickname>=2) ? SignUpService.signUpButtonClicked(id, password, nickname) : alert("다시 작성해주세요") }}}>회원가입</button>
                            {/* onClick={(e) => { SignUpService.signUpButtonClicked(id, password, nickname)}}>회원가입</button> */}
                    </div>
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