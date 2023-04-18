import React, { useState } from 'react';
import * as SignUpService from "../service/SignUpService"
import "../css/SignUp.css"

export const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nickname, setNickname] = useState('');
    const [nicknameError, setNicknameError] = useState('');
    // pull request test
    return (
        <div className="signup">
            <div className="signup-container">
                <h2 className="title">SIGNUP</h2>
                <hr></hr>
                <div>
                    <div className="input-container">
                        <input
                            placeholder='아이디'
                            maxLength="20"
                            className="check_input"
                            type='text'
                            name='id'
                            value={id}
                            onChange={(e) => { SignUpService.userIdChanged(e, setId) }}
                        />
                        <button className="btn" onClick={(e) => { SignUpService.checkId(id, password, nickname) }}>중복 확인</button>
                    </div>
                </div>
                <div>
                    <input
                        placeholder='비밀번호'
                        maxLength="20"
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => {
                            const value = e.target.value;
                            setPassword(value);
                            if (value.length < 8 || value.length > 20) {
                                setPasswordError('비밀번호는 최소 8자리, 최대 20자리여야 합니다.');
                            } else {
                                setPasswordError('');
                            }
                        }}
                    />
                    {passwordError && <span className="error">{passwordError}</span>}
                </div>
                <div>
                    <input
                        placeholder='닉네임'
                        type='text'
                        name='nickname'
                        value={nickname}
                        onChange={(e) => {
                            const value = e.target.value;
                            setNickname(value);
                            if (!value) {
                                setNicknameError('닉네임을 입력해주세요.');
                            } else {
                                setNicknameError('');
                            }
                        }}
                    />
                    {nicknameError && <span className="error">{nicknameError}</span>}
                </div>
                <div>
                    <button
                        className="signup_button"
                        type='button'
                        onClick={SignUpService.handleSignUp}
                    >
                        완료
                    </button>
                </div>
            </div>
        </div>
    );
}
