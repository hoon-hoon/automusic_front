import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const onIdHandler = (event) => {
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    useEffect(() => {
    },
    []);

    const onClickLogin = (event) => {
        // 기본 클릭 동작 방지
        event.preventDefault()

        let userObj = {
            id: id,
            password: password,
        };
        
        axios.post("", userObj)
        .then(res => {
            // 아이디 또는 비번 일치 x
            if (res.status === 403){
                console.log('로그인 실패');
                alert('아이디 또는 비밀번호가 맞지 않습니다.');
                window.location.href = "/login";
            }
            // 로그인 성공
            else if (res.status === 200) {
                sessionStorage.setItem("access_token", res.data.token);
                window.location.href="/main"; // href
            }
        })
        .catch(err => {
            alert("네트워크가 불안정합니다.");
            console.log(err);
        });
    }

    return(
        <div className="login">
        <div className='login-container'>
            <h1 className="title">LOGIN</h1>
            <div>
                <input placeholder='아이디' type='text' name='id' value={id} onChange={onIdHandler} />
            </div>
            <div>
                <input placeholder='비밀번호' type='password' name='password' value={password} onChange={onPasswordHandler} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>로그인</button>
            </div>
        </div>
        
        <div>
            <p><a>비밀번호 찾기</a> | <a>아이디 찾기</a> | <a href="/Singup">회원가입</a></p>
        </div>
    </div>
    )
}

export default Login;