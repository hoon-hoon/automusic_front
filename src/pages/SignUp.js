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
                <h2 className="title">SIGNUP</h2>
                <hr></hr>
                <div class="input-container">
                    <input placeholder='아이디' maxLength="10" class="check_input" type='text' name='id' value={id} 
                        onChange={(e) => { SignUpService.userIdChanged(e, setId) }} style={{ width: '200px' }} />
                </div>
                <div>
                    <input placeholder='비밀번호' maxLength="20" type='password' name='password' value={password}
                        onChange={(e) => { SignUpService.passwordChanged(e, setPassword) }} />
                </div>
                <div>
                    <input placeholder='닉네임' type='text' name='nickname' value={nickname}
                        onChange={(e) => { SignUpService.nickNameChanged(e, setNickname) }} />
                </div>
                <div>
                    <button className="signup_button" type='button'
                        onClick={(e) => { SignUpService.signUpButtonClicked(id, password, nickname) }}>완료</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;