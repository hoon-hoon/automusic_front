import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { call, signup } from '../service/ApiService';

function Signup() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
    },
    []);

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onNicknameHandler = (event) => {
        setNickname(event.currentTarget.value)
    }
    const joinData = {
        userId: id,
        pw: password,
        nickname: nickname
    };

    const onhandlePost = async (data) => {
        call("/signUp", "POST", data)
        .then((response) => {
            console.log(response);
            navigate('/login')
        })
    }

    const onClickSignup = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()
        onhandlePost(joinData);
    }

    return(
        <div className="signup">
            <h2 className="title">SIGNUP</h2>
            <hr></hr>
            <div>
                <label htmlFor='id'>아이디</label>
                <input maxLength="10" className="check_input" type='text' name='id' value={id} onChange={onIdHandler} />
            </div>
            <div>
                <label htmlFor='password'>비밀번호</label>
                <input maxLength="20" type='password' name='password' value={password} onChange={onPasswordHandler} />
            </div>
            <div>
                <label htmlFor='nickname'>닉네임</label>
                <input type='text' name='nickname' value={nickname} onChange={onNicknameHandler} />
            </div>
            <div>
                <button className="signup_button" type='button' onClick={onClickSignup}>완료</button>
            </div>
        </div>
    )
}

export default Signup;