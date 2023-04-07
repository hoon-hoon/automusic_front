import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { call, signup } from '../service/ApiService';

function Signup() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
    },
    []);

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onPhonenumberHandler = (event) => {
        setPhonenumber(event.currentTarget.value)
    }
    const onNicknameHandler = (event) => {
        setNickname(event.currentTarget.value)
    }
    const joinData = {
        userId: "test",
        pw: "PWtest",
        nickname: "hooon"
    };

    const onhandlePost = async (data) => {
        call("/signUp", "POST", data)
        .then((response) => {
            console.log(response);
        })

    }


    const onClickSignup = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()
        onhandlePost(joinData);
    }

    return(
        <div class="signup">
            <h2 class="title">SIGNUP</h2>
            <hr></hr>
            <div>
                <label htmlFor='id'>아이디</label>
                <input maxLength="10" class="check_input" type='text' name='id' value={id} onChange={onIdHandler} />
                <button class="btn">중복 확인</button>
            </div>
            <div>
                <label htmlFor='password'>비밀번호</label>
                <input maxLength="20" type='password' name='password' value={password} onChange={onPasswordHandler} />
            </div>
            <div>
                <label htmlFor='name'>이름</label>
                <input maxLength="6" class="check_input" type='text' name='name' value={name} onChange={onNameHandler} />
            </div>
            <div>
                <label htmlFor='nickname'>닉네임</label>
                <input type='text' name='nickname' value={nickname} onChange={onNicknameHandler} />
            </div>
            <div>
                <button class="signup_button" type='button' onClick={onClickSignup}>완료</button>
            </div>
        </div>
    )
}

export default Signup;