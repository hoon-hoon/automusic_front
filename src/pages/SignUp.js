import React, { useState } from 'react';
import * as SignUpService from "../service/SignUpService";
import "../css/SignUp.css";

export const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    return (
        <div className="signup">
            <div className="signup-container">
                <div className='form-container'>
                    <p className="title">회원가입</p>
                    <div class="input-container">
                        <label htmlFor='id'>아이디</label>
                        <hr className='hrBig'></hr>
                        <input class="id" type='text' name='id' id="id" value={id} 
                            onChange={(e) => { SignUpService.userIdChanged(e, setId) }} />
                        <hr className='hrSmall'></hr>
                    </div>
                    <div class="input-container">
                        <label htmlFor='password'>비밀번호</label>
                        <hr className='hrBig'></hr>
                        <input type='password' name='password' id="password" value={password}
                            onChange={(e) => { SignUpService.passwordChanged(e, setPassword) }} />
                        <hr className='hrSmall'></hr>
                    </div>
                    <div class="input-container">
                        <label htmlFor='passwordCheck'>비밀번호 확인</label>
                        <hr className='hrBig'></hr>
                        <input type='password' name='passwordCheck' id="passwordCheck" />
                        <hr className='hrSmall'></hr>
                    </div>
                    <div class="input-container">
                        <label htmlFor='nickname'>닉네임</label>
                        <hr className='hrBig'></hr>
                        <input type='text' name='nickname' id="nickname" value={nickname}
                            onChange={(e) => { SignUpService.nickNameChanged(e, setNickname) }} />
                        <hr className='hrSmall'></hr>
                    </div>
                    <div>
                        <button className="signup_button" type='button'
                            onClick={(e) => { SignUpService.signUpButtonClicked(id, password, nickname) }}>회원가입</button>
                    </div>
                </div>
                <div className='image-container'>
                    <img className="signup-img" src="/images/signupImg.jpeg" alt="signupImg" loading="lazy" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;